import styled from "styled-components/native";
import { MotiText, MotiView } from "moti";
import { Dimensions } from "react-native";

const INIT_STYLE = { opacity: 0, transform: [{ translateY: 50 }] };
const IN_SCREEN_STYLE = { opacity: 1, transform: [{ translateY: 0 }] };

export const MessageContainer = styled(MotiView).attrs({
  transition: {
    type: "timing",
  },
  from: INIT_STYLE,
  exit: INIT_STYLE,
  animate: IN_SCREEN_STYLE,
})`
  padding: 5px 10px;
  flex-direction: row;
  align-items: center;

  height: 40px;
  width: ${Dimensions.get("window").width - 30}px;

  background-color: ${({ theme }) => theme.colors.primary_150};
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Container: typeof MotiView = styled(MotiView)`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  padding-bottom: 60px;

  align-items: center;
  justify-content: flex-end;

  z-index: 10;
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
