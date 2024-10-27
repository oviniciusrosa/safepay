import { SafeAreaView } from "moti";
import React from "react";
import { KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { cn } from "../../lib/utils";
import ExpoConstants from "expo-constants";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Screen(props: Props): React.ReactElement {
  return (
    <SafeAreaView
      className={cn("bg-white dark:bg-black flex-1")}
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Pressable
          className={cn("w-full h-full flex-1 px-5 py-6", props.className)}
          style={{ marginTop: ExpoConstants.statusBarHeight }}
        >
          {props.children}
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
