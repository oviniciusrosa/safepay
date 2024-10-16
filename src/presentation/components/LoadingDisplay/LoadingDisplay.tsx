import { useLoading } from "~/core/store/loading";

import * as S from "./styles";

export function LoadingDisplay() {
  const { isLoading } = useLoading();

  return (
    <S.Container
      pointerEvents={isLoading ? "auto" : "none"}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ type: "timing", duration: 200 }}
    >
      {isLoading && (
        <>
          <S.LogoContainer>{/* <LoadingIcon /> */}</S.LogoContainer>
          <S.LoadingMessage>Carregando...</S.LoadingMessage>
        </>
      )}
    </S.Container>
  );
}
