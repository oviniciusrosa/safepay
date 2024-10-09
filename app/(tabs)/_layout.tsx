import { Stack, Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  if (Platform.OS === "web") {
    return (
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="explore"
          options={{
            title: "Explore",
          }}
        />
      </Stack>
    );
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
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
