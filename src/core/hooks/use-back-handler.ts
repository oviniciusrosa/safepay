import { useEffect } from "react";
import { BackHandler } from "react-native";

type CallbackBackHandler = () => void;

export function useBackHandler(callback: CallbackBackHandler): void {
  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        callback();
        return true;
      }
    );

    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
