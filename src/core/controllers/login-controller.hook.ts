import { useRouter } from "expo-router";
import { ILoginProps } from "../interfaces/login";
import { useLoading } from "../store/loading";
import { useAuthSession } from "../store/auth-session";
import { RoutesDefinition } from "@/src/@types/routes-definition";
import { IAuthCredentialsService } from "../services/auth-credentials";
import { useState } from "react";
import { IHttpError } from "@/src/infra/http-error";

interface Props {
  authCredentialsService: IAuthCredentialsService;
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

  async function requestSignIn(email: string, password: string) {
    loading.init();
    clearErrorMessage();

    const [session, error] = await props.authCredentialsService.exec(
      email,
      password
    );

    loading.stop();
    if (error) return composeErrorMessage(error);

    authSession.signIn(session);
    router.push(RoutesDefinition.home);
  }

  return {
    errorMessage,
    previousAuthenticatedUser: authSession.session?.user,
    requestSignIn,
  };
}
