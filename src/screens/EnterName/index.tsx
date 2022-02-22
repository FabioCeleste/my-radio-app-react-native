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

type Props = {};

export function EnterName({}: Props) {
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
              <InputField placeholder="Enter your name" />
            </InputWrapper>

            <Button leftMargin={0} rightMargin={218} title="->" />
          </Wrapper>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  );
}
