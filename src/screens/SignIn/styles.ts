import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Wrapper = styled.View`
  flex: 1;
`;

export const Logo = styled.Image`
  margin-top: 91px;
  height: 43px;
  width: 126px;
`;
export const LogoView = styled.View`
  align-items: center;
`;

export const Content = styled.View`
  margin-left: 52px;
  z-index: 3;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.roboto700};
  font-size: 60px;
  margin-top: 55px;
`;

export const SubTitle = styled.Text`
  font-family: ${theme.fonts.roboto400};
  font-size: 16px;
  margin-top: 31px;
`;

export const ButtonWrapper = styled.View`
  margin-bottom: 62px;
  z-index: 3;
`;

export const HappyWoman = styled.Image`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 1;
`;
