import { Wrapper } from "./styles";

import backgroundImage from "../../assets/background.png";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  return (
    <Wrapper source={backgroundImage} blurRadius={7}>
      {children}
    </Wrapper>
  );
}
