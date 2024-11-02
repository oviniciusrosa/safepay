import React from "react";
import { Text, View } from "react-native";
import { StepScreen } from "../../components/Screen/StepScreen";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button } from "../../components";
import { RoutesDefinition } from "@/src/@types/routes-definition";

export function RequestOTP() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <StepScreen title="Recuperar senha" currentStep={2} steps={4} showClose>
      <View className="flex-1 items-center justify-center">
        <Text>Olá, {params.email}</Text>
        <Button
          label="Sucesso"
          className="mt-auto"
          onPress={() => {
            router.push(RoutesDefinition.changePasswordSuccessfully);
          }}
        />
      </View>
    </StepScreen>
  );
}
