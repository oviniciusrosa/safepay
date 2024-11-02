import { IForgotPasswordProps } from "@/src/core/interfaces/forgot-password";
import React from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { StepScreen, Button, Input } from "@/src/presentation/components";

export function ForgotPassword(props: IForgotPasswordProps) {
  const router = useRouter();

  return (
    <StepScreen title="Recuperar senha" currentStep={1} steps={4} showClose>
      <View className="mt-10 flex-1">
        <Text className="text-3xl color-black dark:color-white font-bold">
          Esqueceu sua senha?
        </Text>
        <Text className="text-base color-grey-80 dark:color-grey-40 font-light">
          Preencha o campo abaixo e em alguns instantes enviaremos uma mensagem
          para confirmar a sua identidade.
        </Text>

        <Input.Email
          placeholder="Digite seu email"
          className="mt-4"
          onChangeText={props.onChangeEmail}
        />

        {props.errorMessage && (
          <Text className="color-danger text-sm">{props.errorMessage}</Text>
        )}

        <Button
          label="Confirmar"
          className="mt-auto"
          onPress={props.saveEmail}
        />
        <Button label="Voltar" variant="ghost" onPress={() => router.back()} />
      </View>
    </StepScreen>
  );
}
