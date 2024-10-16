import React from "react";
import { Login } from "./Login";
import { useAuthSession } from "@/src/core/store/auth-session";
import { useRouter } from "expo-router";
import { RoutesDefinition } from "@/src/@types/routes-definition";

export function LoginContainer() {
  const router = useRouter();
  const { signIn } = useAuthSession();

  function requestSignIn() {
    signIn("bunda");
    router.push(RoutesDefinition.home);
  }

  return <Login requestSignIn={requestSignIn} requestSignUp={() => {}} />;
}
