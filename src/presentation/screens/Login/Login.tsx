import React from "react";

import * as S from "./Login.styles";
import { ILoginProps } from "./interface";
import { Card } from "@/src/presentation/components";
import { Button } from "react-native";

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
          <Button title="Entrar" onPress={props.requestSignIn} />
        </S.FirstColumn>
        <S.SecondColumn>{/* EXIBIR IMAGEM */}</S.SecondColumn>
      </Card>
    </S.Container>
  );
}
