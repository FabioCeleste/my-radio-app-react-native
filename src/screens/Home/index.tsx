import { FlatList, Text } from "react-native";
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
  PlayButton,
  Playback,
} from "./styles";
import { radios } from "../../services/radios";
import PlayIcon from "../../assets/play-icon.svg";

import { MusicCard, RadioProps } from "../../components/MusicCard";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";

type Props = {};

export function Home({}: Props) {
  const [activeRadio, setActiveRadio] = useState("-1");
  const [sound, setSound] = useState<Audio.Sound>();
  const [playState, setPlayState] = useState(false);

  const { user } = useAuth();

  const category = "Radios";

  useEffect(() => {
    test();
    const song = new Audio.Sound();
    setSound(song);
  }, []);

  async function test() {
    await Audio.setAudioModeAsync({
      staysActiveInBackground: true,
    });
  }

  async function getMusic(radio: RadioProps) {
    if (activeRadio === "-1") {
      const { sound: song } = await Audio.Sound.createAsync({
        uri: radio.audioLink,
      });

      setSound(song);

      await song.playAsync();
    } else {
      await sound?.stopAsync();

      setSound({} as Audio.Sound);

      const { sound: song } = await Audio.Sound.createAsync({
        uri: radio.audioLink,
      });

      await song.playAsync();

      setSound(song);
    }
    setPlayState(true);
  }

  async function handleActiveRadio(radio: RadioProps) {
    await getMusic(radio);
    setActiveRadio(radio.id);
  }
  async function handlePlayButton() {
    if (activeRadio === "-1") return;

    if (playState) {
      await sound?.stopAsync();
      setPlayState(!playState);
    } else {
      await sound?.playAsync();
      setPlayState(!playState);
    }
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
          <Span>{user.username}</Span>
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
        <Playback>
          <PlayButton>
            <RectButton onPress={() => handlePlayButton()}>
              <Feather
                name={playState ? "pause" : "play"}
                size={42}
                color="white"
              />
            </RectButton>
          </PlayButton>
        </Playback>
      </Content>
    </Wrapper>
  );
}

{
  /* <Playback>
          <PlayButton>
            <RectButton onPress={() => handlePlayButton()}>
              <Feather
                name={playState ? "pause" : "play"}
                size={42}
                color="white"
              />
            </RectButton>
          </PlayButton>
        </Playback> */
}
