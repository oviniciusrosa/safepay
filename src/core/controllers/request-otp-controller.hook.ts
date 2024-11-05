import { useEffect, useState } from "react";
import { RoutesDefinition } from "@/src/@types/routes-definition";
import { useLocalSearchParams, useRouter } from "expo-router";
import { IRequestOTPProps } from "../interfaces/request-otp";
import { useLoading } from "../store/loading";
import { IResetPasswordService } from "../services/reset-password";

const CODE_CELL_COUNT = 4;

interface Props {
  service: IResetPasswordService;
}

export function useRequestOTPController(props: Props): IRequestOTPProps {
  const router = useRouter();
  const loading = useLoading();
  const params = useLocalSearchParams();

  const [secondsToResend, setSecondsToResend] = useState(0);
  const [validateCode, setValidateCOde] = useState("");

  const canGoNext = validateCode.length === CODE_CELL_COUNT;

  function changeCode(code: string) {
    setValidateCOde(code);
  }

  function goNext() {
    if (!canGoNext) return;

    router.push({
      pathname: RoutesDefinition.resetPassword,
      params: { email: params.email, code: validateCode },
    });
  }

  function initCounter() {
    setSecondsToResend(30);
  }

  async function sendCode() {
    if (!params.email) return;

    loading.init();
    await props.service.sendOTP(params.email as string);
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
    canGoNext,
    secondsToResend,
    resendCode: sendCode,
    goNext,
    changeCode,
  };
}
