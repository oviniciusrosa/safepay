import styled from "styled-components/native";

export const Card = styled.View`
  padding: ${({ theme }) => theme.spacing.s16};
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 8px;
`;
