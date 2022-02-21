import { Background } from "../../components/Background";

import logoImage from "../../assets/logo.png";
import happyWoman from "../../assets/happy-woman.png";

import {
  Wrapper,
  ButtonWrapper,
  Logo,
  Content,
  Title,
  SubTitle,
  LogoView,
  HappyWoman,
} from "./styles";
import { Button } from "../../components/Button";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {};

export function SignIn({}: Props) {
  return (
    <Background>
      <Wrapper>
        <View style={{ flex: 1 }}>
          <LogoView>
            <Logo source={logoImage} />
          </LogoView>

          <Content>
            <Title>
              Let's Get{`\n`}
              Started
            </Title>

            <SubTitle>
              Enjoy the best radio stations{`\n`}
              from your home, don't miss{`\n`}
              out on anything{`\n`}
            </SubTitle>
          </Content>
        </View>

        <ButtonWrapper>
          <Button title="Get Started" leftMargin={52} rightMargin={52} />
        </ButtonWrapper>

        <HappyWoman source={happyWoman} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.6)"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "100%",
            zIndex: 2,
          }}
        />
      </Wrapper>
    </Background>
  );
}
