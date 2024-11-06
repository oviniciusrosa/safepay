import React from "react";
import { Login } from "./Login";
import { useLoginController } from "@/src/core/controllers/login-controller.hook";
import { AuthCredentialsService } from "@/src/core/services/auth-credentials";
import { HttpClient } from "@/src/infra/http-client";
import { BiometricAuthService } from "@/src/core/services/biometrics-auth";

export function LoginContainer() {
  const httpClient = HttpClient.create();
  const authCredentialsService = new AuthCredentialsService(httpClient);

  const biometricsService = BiometricAuthService.create();

  const controller = useLoginController({
    authCredentialsService,
    biometricsService,
  });

  return <Login {...controller} />;
}
