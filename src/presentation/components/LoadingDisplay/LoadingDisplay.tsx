import { Text } from "react-native";
import { useLoading } from "~/core/store/loading";

import * as S from "./styles";
// import LottieView from "lottie-react-native";
// import LogoAnimation from "../../../assets/animations/logo-loading.json";

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

// export const LoadingIcon = () => (
//   <LottieView
//     autoPlay
//     source={LogoAnimation}
//     style={{ width: 60, height: 60 }}
//   />
// );
