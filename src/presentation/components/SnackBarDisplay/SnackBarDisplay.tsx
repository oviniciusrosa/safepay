import { useMessage } from "~/core/store/message";
import { MessageCard } from "./MessageCard";

import * as S from "./styles";

export function SnackBarDisplay() {
  const messages = useMessage((state) => state.activeMessages);

  return (
    <S.Container pointerEvents="none" transition={{ duration: 200 }}>
      <>
        {messages.reverse().map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </>
    </S.Container>
  );
}
