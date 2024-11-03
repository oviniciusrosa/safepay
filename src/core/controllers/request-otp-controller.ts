import { useEffect, useState } from "react";
import { RoutesDefinition } from "@/src/@types/routes-definition";
import { useLocalSearchParams, useRouter } from "expo-router";
import { IRequestOTPProps } from "../interfaces/request-otp";
import { ISendOTPService } from "../services/send-otp";
import { useLoading } from "../store/loading";

const CODE_CELL_COUNT = 4;

interface Props {
  sendOTPService: ISendOTPService;
}

export function useRequestOTPController(props: Props): IRequestOTPProps {
  const router = useRouter();
  const loading = useLoading();
  const params = useLocalSearchParams();

  const [secondsToResend, setSecondsToResend] = useState(0);
  const [validateCode, setValidateCOde] = useState("");

  function changeCode(code: string) {
    setValidateCOde(code);
  }

  function goNext() {
    router.push(RoutesDefinition.changePasswordSuccessfully);
  }

  function initCounter() {
    setSecondsToResend(30);
  }

  async function sendCode() {
    if (!params.email) return;

    loading.init();
    await props.sendOTPService.exec(params.email as string);
    initCounter();
    loading.stop();
  }

  useEffect(() => {
    sendCode();
  }, []);

  useEffect(() => {
    if (secondsToResend === 0) return;

    setTimeout(() => {
      setSecondsToResend((oldCounter) => oldCounter - 1);
    }, 1000);
  }, [secondsToResend]);

  return {
    canGoNext: validateCode.length === CODE_CELL_COUNT,
    secondsToResend,
    resendCode: sendCode,
    goNext,
    changeCode,
  };
}
