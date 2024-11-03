import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

import { Text, View } from "react-native";
import { cn } from "@/src/presentation/lib/utils";
import { IPasswordRules } from "@/src/core/interfaces/reset-password";

interface Props {
  rules: IPasswordRules[];
  className?: string;
}

export function Rules(props: Props) {
  const numberOfConditionsReached =
    props.rules.filter((rule) => !rule.isConditionAchieved()).length - 1;

  return (
    <View className={props.className}>
      <View className="my-1 w-full flex-row items-center gap-1 mb-2">
        {Array.from(props.rules)
          .sort((rule) => (rule.isConditionAchieved() ? -1 : 1))
          .map((rule, index) => (
            <View
              key={index}
              className={cn(
                "flex-1 w-12 h-1 rounded-full",
                rule.isConditionAchieved() ? "bg-secondary-700" : "bg-grey-60"
              )}
            />
          ))}
      </View>
      {props.rules.map((rule, index) => (
        <View key={index} className="flex-row items-center gap-1">
          <Entypo name="dot-single" size={14} color="#81C7A4" />
          <Text
            className={cn(
              "text-sm",
              rule.isConditionAchieved()
                ? "color-primary"
                : "color-grey-60 dark:color-grey-40"
            )}
          >
            {rule.description}
          </Text>
        </View>
      ))}
    </View>
  );
}
