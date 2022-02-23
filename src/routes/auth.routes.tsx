import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../screens/SignIn";
import { EnterName } from "../screens/EnterName";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerMode: "none",
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="EnterName" component={EnterName} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
