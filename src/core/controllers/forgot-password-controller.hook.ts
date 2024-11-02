import { useState } from "react";
import { IForgotPasswordProps } from "../interfaces/forgot-password";
import { validateEmail } from "../utils/validate-email";
import { RoutesDefinition } from "@/src/@types/routes-definition";
import { useRouter } from "expo-router";

export function useForgotPasswordController(): IForgotPasswordProps {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function clearErrorMessage() {
    setErrorMessage(null);
  }

  function onChangeEmail(email: string) {
    clearErrorMessage();
    setEmail(email);
  }

  function saveEmail() {
    if (email.length === 0 || !validateEmail(email)) {
      return setErrorMessage("Insira um email válido e tente novamente.");
    }

    router.push({
      pathname: RoutesDefinition.requestOTP,
      params: { email },
    });
  }

  return {
    saveEmail,
    onChangeEmail,
    errorMessage,
  };
}
