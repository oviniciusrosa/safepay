import { useLoading } from "~/core/store/loading";
import LottieView from "lottie-react-native";
import LoadingAnimation from "@/assets/animations/loading.json";

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
        <S.LogoContainer>
          <LottieView
            autoPlay
            source={LoadingAnimation}
            style={{ width: 150, height: 150 }}
          />
        </S.LogoContainer>
      )}
    </S.Container>
  );
}
