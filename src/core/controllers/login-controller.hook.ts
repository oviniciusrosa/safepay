import { useRouter } from "expo-router";
import { ILoginProps } from "../interfaces/login";
import { useLoading } from "../store/loading";
import { useAuthSession } from "../store/auth-session";
import { RoutesDefinition } from "@/src/@types/routes-definition";
import { IAuthCredentialsService } from "../services/auth-credentials";

interface Props {
  authCredentialsService: IAuthCredentialsService;
}

export function useLoginController(props: Props): ILoginProps {
  const router = useRouter();
  const loading = useLoading();
  const authSession = useAuthSession();

  async function requestSignIn(email: string, password: string) {
    loading.init();

    const [session, error] = await props.authCredentialsService.exec(
      email,
      password
    );

    loading.stop();
    if (error) return console.log(error);

    console.log(session);
    authSession.signIn(session);
    router.push(RoutesDefinition.home);
  }

  return {
    requestSignIn,
    navigateToForgetPassword: () => {},
  };
}
