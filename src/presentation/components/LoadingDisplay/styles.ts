import styled from "styled-components/native";
import { MotiText, MotiView } from "moti";
import { Dimensions } from "react-native";

const INIT_STYLE = { opacity: 0, transform: [{ translateY: 10 }] };
const IN_SCREEN_STYLE = { opacity: 1, transform: [{ translateY: 0 }] };

export const LogoContainer = styled(MotiView).attrs({
  transition: {
    type: "timing",
    delay: 200,
  },
  from: INIT_STYLE,
  exit: INIT_STYLE,
  animate: IN_SCREEN_STYLE,
})``;

export const Container: typeof MotiView = styled(MotiView)`
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);

  width: ${Dimensions.get("screen").width}px;
  height: ${Dimensions.get("screen").height}px;
  align-items: center;
  justify-content: center;

  z-index: 1000;
`;

export const LoadingMessage = styled(MotiText).attrs({
  transition: { type: "timing", delay: 200 },
  from: { opacity: 0 },
  exit: { opacity: 0 },
  animate: { opacity: 1 },
})`
  font-family: ${({ theme }) => theme.fonts.P_400};
  color: ${({ theme }) => theme.colors.white};

  margin-top: 15px;
`;
