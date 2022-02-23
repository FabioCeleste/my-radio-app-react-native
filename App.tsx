import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_300Light,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
