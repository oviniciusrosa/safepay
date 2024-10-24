import React from "react";

import * as S from "./Login.styles";
import { ILoginProps } from "./interface";
import { Card } from "@/src/presentation/components";
import { TouchableOpacity, Text, View, ImageBackground } from "react-native";
import { colorScheme, useColorScheme } from "nativewind";

import BgImage from "@/assets/images/bg.jpg";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Login(props: ILoginProps) {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <ImageBackground source={BgImage} className="flex-1 justify-center">
      <View className="flex-1 justify-end">
        <View
          className="flex-[0.5] bg-white dark:bg-black rounded-[32px] p-6"
          style={{
            elevation: 2,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.4,
            shadowRadius: 8,
          }}
        >
          <Text className="text-[24px] font-bold color-black">
            Bem-vindo(a)
          </Text>
          <Text className="text-base color-black">
            Garanta a segurança de suas vendas com o melhor amigo do seu
            negócio.
          </Text>

          <Input className="mt-3" label="Email" placeholder="Email" />
          <Input className="mt-3 mb-6" label="Senha" placeholder="········" />

          <Button
            label="Entrar"
            variant="default"
            onPress={props.requestSignIn}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
