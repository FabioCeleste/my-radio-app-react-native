import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Wrapper = styled.View`
  flex: 1;
  margin-top: 191px;
  margin-left: 43px;
`;

export const Header = styled.View`
  margin-top: 34px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.roboto700};
  font-size: 60px;
  margin-top: 55px;
`;

export const SubTitle = styled.Text`
  font-family: ${theme.fonts.roboto400};
  font-size: 32px;
`;

export const InputWrapper = styled.View`
  margin-top: 51px;
  margin-right: 33px;
  margin-bottom: 75px;
`;

export const InputLabel = styled.Text`
  font-family: ${theme.fonts.roboto400};
  font-size: 20px;
  margin-bottom: 10px;
`;

export const InputField = styled.TextInput`
  height: 53px;
  padding-left: 35px;
  font-size: 24px;
  border: 2px solid ${theme.colors.pink};
  border-radius: 5px;
`;
