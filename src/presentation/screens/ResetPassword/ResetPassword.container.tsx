import React from "react";
import { ResetPassword } from "./ResetPassword";
import { useResetPasswordController } from "@/src/core/controllers/reset-password-controller.hook";
import { ResetPasswordService } from "@/src/core/services/reset-password";
import { HttpClient } from "@/src/infra/http-client";

export function ResetPasswordContainer() {
  const httpClient = HttpClient.create();
  const service = new ResetPasswordService(httpClient);
  const controller = useResetPasswordController({ service });

  return <ResetPassword {...controller} />;
}
