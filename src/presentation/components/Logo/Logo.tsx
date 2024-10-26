import { SafeAreaView } from "moti";
import React from "react";
import { Image, View } from "react-native";

import DefaultLogo from "@/assets/images/safepay-logo.png";
import WhiteLogo from "@/assets/images/safepay-logo-white.png";
import { useColorScheme } from "nativewind";
import { cn } from "../../lib/utils";

interface Props {
  className?: string;
}

export function Logo(props: Props): React.ReactElement {
  const { colorScheme } = useColorScheme();

  return (
    <Image
      source={colorScheme === "dark" ? WhiteLogo : DefaultLogo}
      className={cn("h-8 w-auto", props.className)}
      resizeMode="contain"
    />
  );
}
