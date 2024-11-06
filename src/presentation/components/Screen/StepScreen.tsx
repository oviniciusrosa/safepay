import React, { useEffect } from "react";
import { Screen, Props as DefaultScreenProps } from "./Screen";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import * as Moti from "moti";
import { useColorScheme } from "nativewind";
import { useRouter } from "expo-router";

interface HeaderProps {
  title: string;
  onGoBack?: VoidCallback;
  showClose?: boolean;
}

interface Props extends DefaultScreenProps, HeaderProps {
  steps: number;
  currentStep: number;
}

const ScreenWidth = Dimensions.get("window").width - 40;

export function StepScreen(props: Props): React.ReactElement {
  const router = useRouter();
  const [stepWidth, setStepWidth] = React.useState(0);

  function goBackInterceptor() {
    if (props.onGoBack) return props.onGoBack();

    router.back();
  }

  function initStepAnimation() {
    const grownFactor = props.currentStep / props.steps;
    const calculatedWidth = ScreenWidth * grownFactor;
    setStepWidth(calculatedWidth);
  }

  useEffect(initStepAnimation, []);

  return (
    <Screen disableLoading={props.disableLoading}>
      <Header
        title={props.title}
        onGoBack={goBackInterceptor}
        showClose={props.showClose}
      />

      <View className="mt-4 min-w-8 h-6" style={{ width: stepWidth }}>
        {/* Step Indicator */}
        <Text className="color-primary-300 text-sm self-end font-bold">
          {props.currentStep} / {props.steps}
        </Text>

        {/* Step Line */}
        <Moti.View
          className="bg-primary h-2 rounded-full"
          animate={{ width: stepWidth, minWidth: 12 }}
          transition={{ type: "spring", duration: 800, delay: 200 }}
          style={{
            shadowColor: "#388E63",
            shadowOffset: {
              width: 4,
              height: 3,
            },
            shadowOpacity: 0.37,
            shadowRadius: 8.65,

            elevation: 11,
          }}
        />
      </View>

      <Moti.ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "timing", duration: 200, delay: 200 }}
        exit={{ opacity: 0 }}
      >
        {props.children}
      </Moti.ScrollView>
    </Screen>
  );
}

function Header(props: HeaderProps) {
  const router = useRouter();
  const { colorScheme } = useColorScheme();

  const iconColor = colorScheme === "dark" ? "white" : "black";

  return (
    <View className="w-full h-6 flex-row items-center justify-between mb-4">
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.onGoBack}
        className="w-6 h-6 items-center justify-center mr-auto"
      >
        <Ionicons name="chevron-back-sharp" size={20} color={iconColor} />
      </TouchableOpacity>
      <Text className="color-grey-80 dark:color-grey-40 text-base mr-auto">
        {props.title}
      </Text>
      {props.showClose && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.dismissAll()}
          className="w-6 h-6 items-center justify-center"
        >
          <Ionicons name="close-sharp" size={20} color={iconColor} />
        </TouchableOpacity>
      )}
    </View>
  );
}
