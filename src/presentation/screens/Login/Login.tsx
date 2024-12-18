import React from "react";

import { ILoginProps } from "@/src/core/interfaces/login";
import {
  Screen,
  Logo,
  AppVersion,
  Input,
  Button,
  FingerprintButton,
} from "@/src/presentation/components";
import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { RoutesDefinition } from "@/src/@types/routes-definition";

export function Login(props: ILoginProps) {
  const [email, setEmail] = React.useState(
    props.previousAuthenticatedUser?.email ?? ""
  );
  const [password, setPassword] = React.useState("");

  const hasPreviousUser = Boolean(props.previousAuthenticatedUser);

  return (
    <Screen>
      <ScrollView
        className="flex-1"
        contentContainerClassName="grow justify-center"
      >
        <Logo className="self-center" />
        <View className="flex-1 justify-center">
          <Text className="color-grey-80 dark:color-grey-20 text-[32px] font-bold">
            Olá,
          </Text>
          <Text className="color-grey-70 dark:color-grey-40  text-base">
            Garanta a segurança de suas vendas com o melhor amigo do seu
            negócio.
          </Text>

          <Input.Email
            className="mt-8"
            label="Email"
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            lockField={hasPreviousUser}
            enableEditingWhenLock
            returnKeyType="next"
          />

          <Input.Password
            className="mt-3 mb-3"
            label="Senha"
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => props.requestSignIn(email, password)}
            returnKeyType="done"
          />

          {props.errorMessage && (
            <Text className="color-danger text-sm mb-3">
              {props.errorMessage}
            </Text>
          )}

          <Button
            label="Entrar"
            variant="default"
            onPress={() => props.requestSignIn(email, password)}
          />

          <Link href={RoutesDefinition.forgotPassword} className="mt-6">
            <Text className="text-grey-60 dark:text-grey-40 underline">
              Esqueci minha senha
            </Text>
          </Link>

          {hasPreviousUser && (
            <FingerprintButton
              className="mt-12 self-center"
              onRequest={props.requestBiometricsSignIn}
            />
          )}
        </View>

        <AppVersion className="self-center" />
      </ScrollView>
    </Screen>
  );
}
