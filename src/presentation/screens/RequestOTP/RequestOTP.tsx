import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  StepScreen,
  ValidationCodeInput,
  Button,
} from "@/src/presentation/components";
import { IRequestOTPProps } from "@/src/core/interfaces/request-otp";
import { useRouter } from "expo-router";
import { cn } from "../../lib/utils";

export function RequestOTP(props: IRequestOTPProps) {
  const router = useRouter();

  return (
    <StepScreen
      title="Código de verificação"
      currentStep={2}
      steps={4}
      showClose
    >
      <View className="mt-10 flex-1">
        <Text className="text-3xl color-black dark:color-white font-bold">
          Enviamos um código
        </Text>
        <Text className="text-base color-grey-80 dark:color-grey-40 font-light">
          Para válidar o seu pedido, preencha o campo abaixo com o código que
          enviamos no seu email!
        </Text>

        <View className="my-auto items-center">
          <ValidationCodeInput
            className="mb-4"
            onChangeCode={props.changeCode}
            onSubmitEditing={props.goNext}
          />

          <View className="flex-row items-center">
            {props.secondsToResend > 0 && (
              <Text className="text-base color-primary-300 font-semibold mr-2">
                {props.secondsToResend}s
              </Text>
            )}

            <TouchableOpacity activeOpacity={0.7} onPress={props.resendCode}>
              <Text
                className={cn(
                  "text-base color-grey-80 dark:color-grey-40 font-light underline",
                  props.secondsToResend > 0 && "opacity-50"
                )}
              >
                Enviar novamente
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button
          label="Continuar"
          className="mt-auto"
          disabled={!props.canGoNext}
          onPress={props.goNext}
        />
        <Button label="Voltar" variant="ghost" onPress={() => router.back()} />
      </View>
    </StepScreen>
  );
}
