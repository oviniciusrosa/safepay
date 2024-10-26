import React from "react";
import { Text, View } from "react-native";

import { appVersion } from "@/src/core/utils/app-version";

interface Props {
  className?: string;
  textClassName?: string;
}

export function AppVersion(props: Props) {
  return (
    <View className={props.className}>
      <Text className="color-grey-50 dark:color-grey-40 text-xs">
        v{appVersion} © SafePay 2024
      </Text>
    </View>
  );
}
