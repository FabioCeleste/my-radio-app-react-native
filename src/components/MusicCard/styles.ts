import styled from "styled-components/native";
import { theme } from "../../global/theme";

type Props = {
  isActive: boolean;
  hasSeparator?: boolean;
};

export const Wrapper = styled.View<Props>`
  ${({ isActive, hasSeparator }) => `
  align-items: center;

  width: 139px;
  height: 139px;
  background: ${isActive ? theme.colors.pink : "transparent"};
  border-radius: 15px;
  margin-bottom: 14px;
  ${hasSeparator ? "margin-right: 15px;" : ""}
  ${!isActive ? `border: 3px solid ${theme.colors.grey}` : ""}
  `}
`;

export const Title = styled.Text<Props>`
  ${({ isActive }) => `
  font-size: 17px;
  margin-top: 10px;
  font-family: ${theme.fonts.roboto400};
  color: ${isActive ? "white" : theme.colors.greyText};
  `}
`;

export const RadioNation = styled.Text<Props>`
  ${({ isActive }) => `
  margin-top: 10px;
  font-size: 36px;
  font-family: ${theme.fonts.roboto500};
  color: ${isActive ? "white" : theme.colors.greyText};
  `}
`;
