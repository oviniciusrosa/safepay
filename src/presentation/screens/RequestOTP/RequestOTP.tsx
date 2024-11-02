import React from "react";
import { Text, View } from "react-native";
import { StepScreen } from "../../components/Screen/StepScreen";
import { useLocalSearchParams } from "expo-router";

export function RequestOTP() {
  const params = useLocalSearchParams();

  return (
    <StepScreen title="Recuperar senha" currentStep={2} steps={4} showClose>
      <View className="flex-1 items-center justify-center">
        <Text>Olá, {params.email}</Text>
      </View>
    </StepScreen>
  );
}
