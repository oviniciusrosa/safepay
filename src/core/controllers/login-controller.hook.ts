import { useRouter } from "expo-router";
import { ILoginProps } from "../interfaces/login";
import { useLoading } from "../store/loading";
import { useAuthSession } from "../store/auth-session";
import { RoutesDefinition } from "@/src/@types/routes-definition";
import { IAuthCredentialsService } from "../services/auth-credentials";
import { useState } from "react";
import { IHttpError } from "@/src/infra/http-error";
import { IBiometricsService } from "../services/biometrics-auth";

import { isEmpty } from "lodash";
interface Props {
  authCredentialsService: IAuthCredentialsService;
  biometricsService: IBiometricsService;
}

export function useLoginController(props: Props): ILoginProps {
  const router = useRouter();
  const loading = useLoading();
  const authSession = useAuthSession();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function clearErrorMessage() {
    setErrorMessage(null);
  }

  function composeErrorMessage(_: IHttpError) {
    // TODO: Criar um mapper para mensagens de erro

    setErrorMessage(
      "E-mail ou senha incorretos! Verifique suas credenciais e tente novamente."
    );
  }

  async function requestSignIn(
    email: string,
    password: string,
    savePassword = true
  ) {
    if (isEmpty(email)) return setErrorMessage("Insira um e-mail válido!");
    if (isEmpty(password)) return setErrorMessage("Insira uma senha válida!");

    loading.init();
    clearErrorMessage();

    const [session, error] = await props.authCredentialsService.exec(
      email,
      password
    );

    if (error) return composeErrorMessage(error);
    if (savePassword) await props.biometricsService.savePassword(password);

    authSession.signIn(session);

    loading.stop();
    router.push(RoutesDefinition.home);
  }

  async function requestBiometricsSignIn() {
    const password = await props.biometricsService.getStoredPassword();
    if (!password) return;

    requestSignIn(authSession.session.user.email, password, false);
  }

  return {
    errorMessage,
    previousAuthenticatedUser: authSession.session?.user,
    requestSignIn,
    requestBiometricsSignIn,
  };
}
