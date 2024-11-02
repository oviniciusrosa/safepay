import React, { useEffect } from "react";

import Feather from "@expo/vector-icons/Feather";
import { IForgotPasswordProps } from "@/src/core/interfaces/forgot-password";
import { Dimensions, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { StepScreen, Button, Input } from "@/src/presentation/components";
import { SuccessShape } from "../../icons/SuccessShape";
import ConfettiAnimation from "@/assets/animations/confetti.json";

import * as Moti from "moti";
import LottieView from "lottie-react-native";

export function ChangePasswordSuccessfully() {
  const [showConfetti, setShowConfetti] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(true);
    }, 400);
  }, []);

  return (
    <StepScreen
      title=""
      currentStep={4}
      steps={4}
      onGoBack={() => router.dismissAll()}
      showClose
    >
      <View className="mt-10 flex-1">
        <View className="my-auto items-center justify-center">
          <SuccessIndicator />
          <Text className="text-4xl text-center color-black dark:color-white font-bold mb-5">
            Sucesso! Você alterou sua senha.
          </Text>
          <Text className="text-base w-4/5 text-center self-center color-grey-80 dark:color-grey-40 font-light">
            Caso esqueça novamente, você pode mudar quantas vezes for
            necessário.
          </Text>
        </View>
        <Button
          label="Concluir"
          className="mt-auto"
          onPress={() => router.dismissAll()}
        />
      </View>
      <View
        className="absolute bottom-0 left-0 right-0 w-full h-full"
        pointerEvents="none"
      >
        {showConfetti && (
          <LottieView
            autoPlay
            loop={false}
            source={ConfettiAnimation}
            style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height,
            }}
          />
        )}
      </View>
    </StepScreen>
  );
}

function SuccessIndicator() {
  return (
    <Moti.View
      className="mb-8 self-center items-center justify-center"
      style={{ position: "relative" }}
      from={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "timing", duration: 400, delay: 200 }}
    >
      <Moti.View
        from={{ rotate: "0deg" }}
        animate={{ rotate: "720deg" }}
        transition={{ type: "spring", duration: 800, delay: 400 }}
      >
        <SuccessShape />
      </Moti.View>
      <View className="absolute">
        <Feather name="check" size={64} color="white" />
      </View>
    </Moti.View>
  );
}
