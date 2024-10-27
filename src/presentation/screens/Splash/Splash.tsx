import React, { useEffect } from "react";
import { cn } from "../../lib/utils";
import * as Moti from "moti";
import { AppVersion, Logo } from "@/src/presentation/components";
import { useRouter } from "expo-router";
import { RoutesDefinition } from "@/src/@types/routes-definition";

export function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(RoutesDefinition.login);
    }, 1000);
  }, []);

  return (
    <Moti.View
      className={cn(
        "bg-white dark:bg-black flex-1 justify-center items-center flex-col"
      )}
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Logo />
      <AppVersion className="absolute bottom-5" />
    </Moti.View>
  );
}
