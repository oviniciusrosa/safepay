import { useState } from "react";
import { IForgotPasswordProps } from "../interfaces/forgot-password";
import { validateEmail } from "../utils/validate-email";
import { RoutesDefinition } from "@/src/@types/routes-definition";
import { useRouter } from "expo-router";
import { useAuthSession } from "../store/auth-session";

export function useForgotPasswordController(): IForgotPasswordProps {
  const router = useRouter();
  const { session } = useAuthSession();

  const [email, setEmail] = useState(session?.user?.email ?? "");
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
    email,
    hasDefaultEmail: Boolean(session?.user?.email),
    saveEmail,
    onChangeEmail,
    errorMessage,
  };
}
