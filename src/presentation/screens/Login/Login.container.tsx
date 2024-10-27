import React from "react";
import { Login } from "./Login";
import { useAuthSession } from "@/src/core/store/auth-session";
import { useRouter } from "expo-router";
import { RoutesDefinition } from "@/src/@types/routes-definition";
import { useLoading } from "@/src/core/store/loading";

export function LoginContainer() {
  const router = useRouter();
  const loading = useLoading();
  const { signIn } = useAuthSession();

  function requestSignIn() {
    loading.init();

    setTimeout(() => {
      signIn("bunda");
      router.push(RoutesDefinition.home);
      loading.stop();
    }, 2000);
  }

  return <Login requestSignIn={requestSignIn} requestSignUp={() => {}} />;
}
