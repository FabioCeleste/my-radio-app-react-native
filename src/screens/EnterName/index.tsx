import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";

import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import {
  Wrapper,
  Header,
  Title,
  SubTitle,
  InputWrapper,
  InputLabel,
  InputField,
} from "./styles";

import PlayIcon from "../../assets/play-icon.svg";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigation } from "@react-navigation/native";

type Props = {};

export function EnterName({}: Props) {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const { singIn } = useAuth();

  function handleLogin() {
    const user = { username };
    singIn(user);
    navigation.navigate("Home");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background>
        <ScrollView>
          <Wrapper>
            <PlayIcon height={58} width={58} />

            <Header>
              <Title>Sign up</Title>
              <SubTitle>to start play</SubTitle>
            </Header>

            <InputWrapper>
              <InputLabel>Your Name</InputLabel>
              <InputField
                placeholder="Enter your name"
                onChangeText={setUsername}
              />
            </InputWrapper>

            <Button
              leftMargin={0}
              rightMargin={218}
              title="->"
              onPress={handleLogin}
            />
          </Wrapper>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  );
}
