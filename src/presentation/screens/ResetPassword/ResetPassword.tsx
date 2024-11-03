import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StepScreen, Button, Input } from "@/src/presentation/components";
import { IRequestOTPProps } from "@/src/core/interfaces/request-otp";
import { Rules } from "./components/Rules";
import { IResetPasswordProps } from "@/src/core/interfaces/reset-password";

export function ResetPassword(props: IResetPasswordProps) {
  return (
    <StepScreen
      title="Nova senha"
      currentStep={3}
      steps={4}
      onGoBack={() => {}}
      showClose
    >
      <View className="mt-10 flex-1">
        <Text className="text-3xl color-black dark:color-white font-bold">
          Redefinir senha
        </Text>
        <Text className="text-base color-grey-80 dark:color-grey-40 font-light">
          Prontinho, agora você pode mudar a sua senha!
        </Text>

        <Input.Password
          placeholder="Digite sua nova senha"
          className="mt-8"
          onChangeText={props.onChangePassword}
          onSubmitEditing={props.submitPasswordChange}
          returnKeyType="next"
        />

        <Rules rules={props.rules} className="mt-3" />

        <Input.Password
          placeholder="Digite sua nova senha"
          className="mt-4"
          onChangeText={props.onChangeConfirmPassword}
          onSubmitEditing={props.submitPasswordChange}
          returnKeyType="done"
        />
        {props.errorMessage && (
          <Text className="color-danger text-sm mt-1">
            {props.errorMessage}
          </Text>
        )}

        <Button
          label="Continuar"
          className="mt-auto"
          disabled={!props.canSubmit}
          onPress={props.submitPasswordChange}
        />
      </View>
    </StepScreen>
  );
}
