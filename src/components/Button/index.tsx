import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { Wrapper, Title, TitleWrapper } from "./styles";

type Props = RectButtonProps & {
  title: string;
  leftMargin: number;
  rightMargin: number;
};

export function Button({ title, leftMargin, rightMargin, ...rest }: Props) {
  return (
    <RectButton {...rest}>
      <Wrapper leftMargin={leftMargin} rightMargin={rightMargin}>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      </Wrapper>
    </RectButton>
  );
}
