import React from "react";

import * as S from "./Login.styles";
import { ILoginProps } from "./interface";
import { Card } from "@/src/presentation/components";
import { Button, TouchableOpacity, Text } from "react-native";

export function Login(props: ILoginProps) {
  return (
    <S.Container>
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
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.requestSignIn}
            className="flex w-full items-center justify-center bg-green-400 rounded-md p-2 mt-2"
          >
            <Text className="text-xl font-bold">Entrar</Text>
          </TouchableOpacity>
        </S.FirstColumn>
        <S.SecondColumn>{/* EXIBIR IMAGEM */}</S.SecondColumn>
      </Card>
    </S.Container>
  );
}
