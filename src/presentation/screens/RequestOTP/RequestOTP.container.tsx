import React from "react";
import { RequestOTP } from "./RequestOTP";
import { useRequestOTPController } from "@/src/core/controllers/request-otp-controller";
import { HttpClient } from "@/src/infra/http-client";
import { SendOTPService } from "@/src/core/services/send-otp";

export function RequestOTPContainer() {
  const httpClient = HttpClient.create();
  const sendOTPService = new SendOTPService(httpClient);
  const controller = useRequestOTPController({ sendOTPService });

  return <RequestOTP {...controller} />;
}
