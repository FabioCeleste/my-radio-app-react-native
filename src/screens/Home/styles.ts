import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Wrapper = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Menu = styled.View`
  flex: 1;
  padding-top: 77px;
  align-items: center;

  background: ${theme.colors.side};
`;

export const Options = styled.View`
  position: absolute;
  top: 40%;
`;

export const Content = styled.View`
  flex: 5;
  background-color: ${theme.colors.main};
`;
export const HelloWrapper = styled.View`
  flex-direction: row;
  margin-top: 77px;
  margin-left: 22px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.roboto400};
  font-size: 34px;
`;

export const Span = styled.Text`
  font-family: ${theme.fonts.roboto400};
  font-size: 34px;
  color: ${theme.colors.pink};
`;

export const Subtitle = styled.Text`
  font-family: ${theme.fonts.roboto300};
  margin-top: 30px;
  font-size: 36px;
  margin-left: 22px;
`;

export const FlatWrapper = styled.View`
  align-items: center;
`;

export const Playback = styled.View`
  position: absolute;
  align-self: center;
  bottom: 45px;
`;

export const PlayButton = styled.View`
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background: ${theme.colors.pink};
`;
