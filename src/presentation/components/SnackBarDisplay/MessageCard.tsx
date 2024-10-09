import { Text } from "react-native";
import { useMessage } from "~/core/store/message";
import { useEffect } from "react";

import * as S from "./styles";

export function MessageCard({ message }) {
  const hideMessage = useMessage((state) => state.hideMessage);

  useEffect(() => {
    setTimeout(() => hideMessage(message.id), 2000);
  }, []);

  return (
    <S.MessageContainer>
      <Text style={{ color: "white" }}>{message.text}</Text>
    </S.MessageContainer>
  );
}
