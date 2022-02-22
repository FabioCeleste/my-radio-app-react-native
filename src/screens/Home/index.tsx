import { FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  Wrapper,
  Menu,
  Options,
  Content,
  Title,
  Subtitle,
  Span,
  HelloWrapper,
  FlatWrapper,
} from "./styles";

import PlayIcon from "../../assets/play-icon.svg";
import { MusicCard, RadioProps } from "../../components/MusicCard";
import { FlatCardSeparator } from "../../components/FlatCardSeparator";
import { useState } from "react";

type Props = {};

export function Home({}: Props) {
  const [activeRadio, setActiveRadio] = useState("1");

  const username = "Fabio";
  const category = "Radios";

  const radios = [
    {
      id: "1",
      radioName: "TripleJ",
      radioNation: "UK",
      audioLink: "http://live-radio01.mediahubaustralia.com/4TJW/mp3/",
    },
    {
      id: "2",
      radioName: "TripleJ",
      radioNation: "UK",
      audioLink: "http://live-radio01.mediahubaustralia.com/4TJW/mp3/",
    },
    {
      id: "3",
      radioName: "TripleJ",
      radioNation: "UK",
      audioLink: "http://live-radio01.mediahubaustralia.com/4TJW/mp3/",
    },
  ];

  function handleActiveRadio(radio: RadioProps) {
    setActiveRadio(radio.id);
  }

  return (
    <Wrapper>
      <Menu>
        <PlayIcon width={33} />

        <Options>
          <Feather name="music" size={32} />
          <Feather name="heart" size={32} style={{ marginTop: 63 }} />
        </Options>
      </Menu>

      <Content>
        <HelloWrapper>
          <Title>Hello </Title>
          <Span>{username}</Span>
        </HelloWrapper>

        <Subtitle>{category}</Subtitle>

        <FlatWrapper>
          <FlatList
            data={radios}
            style={{ flexDirection: "column" }}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <MusicCard
                data={item}
                index={index}
                activeRadio={activeRadio}
                handleActiveRadio={handleActiveRadio}
              />
            )}
          />
        </FlatWrapper>
      </Content>
    </Wrapper>
  );
}
