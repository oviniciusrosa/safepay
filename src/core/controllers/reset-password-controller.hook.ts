import React, { useCallback, useMemo } from "react";
import {
  IPasswordRules,
  IResetPasswordProps,
} from "../interfaces/reset-password";
import { useLocalSearchParams, useRouter } from "expo-router";
import { RoutesDefinition } from "@/src/@types/routes-definition";
import { useLoading } from "../store/loading";
import { IResetPasswordService } from "../services/reset-password";
import { useAuthSession } from "../store/auth-session";
import { useBackHandler } from "../hooks/use-back-handler";

interface Props {
  service: IResetPasswordService;
}

export function useResetPasswordController(props: Props): IResetPasswordProps {
  const router = useRouter();
  const params = useLocalSearchParams();
  const loading = useLoading();
  const { setIntendAuthenticationEmail } = useAuthSession();

  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(null);

  useBackHandler(() => {});

  const rules: IPasswordRules[] = [
    {
      description: "Mínimo 8 caracteres",
      isConditionAchieved: () => password.length >= 8,
    },
    {
      description: "Precisa conter ao menos um número",
      isConditionAchieved: () => Boolean(password.match(/\d/)),
    },
    {
      description: "Deve conter um caracter especial: !@#$%&*(),.?:{}|<>",
      isConditionAchieved: () =>
        Boolean(password.match(/[!@#$%^&*(),.?":{}|<>]/)),
    },
  ];

  const validatePasswords = useCallback(() => {
    if (confirmPassword && confirmPassword !== password) {
      setErrorMessage("Senhas não coincidem!");
      return false;
    }

    if (!confirmPassword) return false;

    return rules.every((rule) => rule.isConditionAchieved());
  }, [password, confirmPassword]);

  const canSubmit = useMemo(() => {
    if (!password) return false;

    return validatePasswords();
  }, [password, validatePasswords]);

  function onChange(setState: React.Dispatch<any>) {
    return (value: string) => {
      setErrorMessage(null);
      setState(value);
    };
  }

  async function submitPasswordChange() {
    if (!canSubmit || !params.code) return;

    loading.init();

    const [error] = await props.service.resetPassword(
      params.code as string,
      password
    );

    if (Boolean(error)) {
      return setErrorMessage(
        "Ops! Não foi possível alterar a senha! Tente novamente em alguns instantes..."
      );
    }

    loading.stop();
    setIntendAuthenticationEmail(params.email as string);
    router.push(RoutesDefinition.changePasswordSuccessfully);
  }

  return {
    rules,
    errorMessage,
    onChangePassword: onChange(setPassword),
    onChangeConfirmPassword: onChange(setConfirmPassword),
    submitPasswordChange,
    canSubmit,
  };
}
