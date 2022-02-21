import { Wrapper } from "./styles";

import backgroundImage from "../../assets/background.png";

type Props = {};

export function Background({}: Props) {
  return <Wrapper source={backgroundImage}></Wrapper>;
}
