import React from "react";

import * as S from "./Login.styles";
import { ILoginProps } from "./interface";
import { Card } from "@/src/presentation/components";
import { TouchableOpacity, Text, View } from "react-native";
import { colorScheme, useColorScheme } from "nativewind";

import { Button } from "../../components/Button";

export function Login(props: ILoginProps) {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Card>
        <S.FirstColumn>
          <S.Title>Bem vindo(a) de volta!</S.Title>
          <S.Subtitle>
            Garanta a segurança de suas vendas com o melhor amigo do seu
            negócio.
          </S.Subtitle>

          {/* INPUT: EMAIL */}
          {/* INPUT: SENHA */}
          {/* BOTÃO: ENTRAR */}
          {/* <Button title="Entrar" onPress={props.requestSignIn} /> */}
          {/* <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.requestSignIn}
            className="flex w-full items-center justify-center bg-green-400 rounded-md p-2 mt-2"
          >
            <Text className="text-xl font-bold">Entrar</Text>
          </TouchableOpacity> */}
          <Button
            label="Entrar"
            variant="default"
            onPress={props.requestSignIn}
          />
          <View className="h-2" />
          <Button
            label="Change theme"
            variant="link"
            onPress={() => {
              setColorScheme(colorScheme === "dark" ? "light" : "dark");
            }}
          />
        </S.FirstColumn>
        <S.SecondColumn>{/* EXIBIR IMAGEM */}</S.SecondColumn>
      </Card>
    </View>
  );
}
