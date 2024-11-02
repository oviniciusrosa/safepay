import React from "react";
import { ForgotPassword } from "./ForgotPassword";
import { useForgotPasswordController } from "@/src/core/controllers/forgot-password-controller.hook";

export function ForgotPasswordContainer() {
  const controller = useForgotPasswordController();
  return <ForgotPassword {...controller} />;
}
