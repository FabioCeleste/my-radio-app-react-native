import { Wrapper, Title, RadioNation } from "./styles";

import RadioSvg from "../../assets/radiosong.svg";
import { useEffect, useState } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

export type RadioProps = {
  radioName: string;
  radioNation: string;
  audioLink: string;
  id: string;
};

type Props = RectButtonProps & {
  data: RadioProps;
  index: number;
  activeRadio: string;
  handleActiveRadio: (radio: RadioProps) => void;
};

export function MusicCard({
  data,
  index,
  activeRadio,
  handleActiveRadio,
}: Props) {
  const [hasSeparator, setHasSeparator] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (index % 2 === 0) {
      setHasSeparator(true);
    }

    if (data.id === activeRadio) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeRadio]);

  return (
    <RectButton onPress={() => handleActiveRadio(data)}>
      <Wrapper isActive={isActive} hasSeparator={hasSeparator}>
        <Title isActive={isActive}>{data.radioName}</Title>
        <RadioNation isActive={isActive}>{data.radioNation}</RadioNation>
        <RadioSvg width={93} height={22} />
      </Wrapper>
    </RectButton>
  );
}
