import styled from "styled-components/native";
import { theme } from "../../global/theme";

export type ButtonStyleProps = {
  leftMargin: number;
  rightMargin: number;
};

export const Wrapper = styled.View<ButtonStyleProps>`
  ${({ leftMargin, rightMargin }) => `
  margin-right:${rightMargin}px;
  margin-left: ${leftMargin}px;
  background: ${theme.colors.pink};
  border-radius: 10px;`}
`;

export const TitleWrapper = styled.View`
  height: 58px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.roboto400};
  font-size: 20px;
`;
