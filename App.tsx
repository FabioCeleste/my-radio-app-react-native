import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { SignIn } from "./src/screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <SignIn />;
}
