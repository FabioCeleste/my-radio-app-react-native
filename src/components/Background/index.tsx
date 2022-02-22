import { Wrapper } from "./styles";

import backgroundImage from "../../assets/background.png";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  hasBlur?: boolean;
};

export function Background({ children, hasBlur }: Props) {
  return (
    <Wrapper source={backgroundImage} blurRadius={hasBlur ? 7 : 0}>
      {children}
    </Wrapper>
  );
}
