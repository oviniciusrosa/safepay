import { SplashScreen } from "@/src/presentation/screens/Splash";
import { Redirect, Slot, Stack } from "expo-router";
import { Platform } from "react-native";

const Index = () => {
  if (Platform.OS === "web") return <Redirect href="/login" />;

  return <SplashScreen />;
};
export default Index;
