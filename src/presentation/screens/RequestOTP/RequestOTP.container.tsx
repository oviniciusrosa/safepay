import React from "react";
import { RequestOTP } from "./RequestOTP";
import { useRequestOTPController } from "@/src/core/controllers/request-otp-controller.hook";
import { HttpClient } from "@/src/infra/http-client";
import { ResetPasswordService } from "@/src/core/services/reset-password";

export function RequestOTPContainer() {
  const httpClient = HttpClient.create();
  const service = new ResetPasswordService(httpClient);
  const controller = useRequestOTPController({ service });

  return <RequestOTP {...controller} />;
}
