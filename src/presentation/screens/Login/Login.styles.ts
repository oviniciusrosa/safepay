import { getFontFamily } from "@/src/theme/get-font-family";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FirstColumn = styled.View`
  flex: 0.7;
`;

export const SecondColumn = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => getFontFamily(theme, "P_600")};
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.grey_60};
`;
