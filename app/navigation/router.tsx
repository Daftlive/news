import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../screens/home.screen";

const Stack = createStackNavigator();

export type StackParams = {
  Home: undefined;
};

export interface Navigation {
  navigation: NativeStackNavigationProp<StackParams>;
}

const linking = {
  prefixes: ["https://news.app"],
  config: {
    screens: {
      Home: "/Home",
    },
  },
};

function Router() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          cardOverlayEnabled: true,
          gestureResponseDistance: 100,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
