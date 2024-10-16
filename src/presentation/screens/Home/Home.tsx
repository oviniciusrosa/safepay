import { useAuthSession } from "@/src/core/store/auth-session";
import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

export function Home() {
  const { signOut } = useAuthSession();

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Home mobile</Text>
      <Button title="Sair" onPress={signOut} />
    </SafeAreaView>
  );
}
