import { useAuthSession } from "@/src/core/store/auth-session";
import { Redirect, Slot, Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const { session } = useAuthSession();

  if (!session) return <Redirect href="/login" />;

  if (process.env.EXPO_OS === "web") return <Slot />;

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
    </Tabs>
  );
}
