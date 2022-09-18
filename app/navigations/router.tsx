import { ID } from "@datorama/akita";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import NewsScreen from "../screens/news.screen";
import ReaderScreen from "../screens/reader.screen";

/** Type to define the router structure */
export type StackParams = {
  News: undefined;
  Reader: { article: ID };
};

export interface INavigation {
  navigation: NativeStackNavigationProp<StackParams>;
}

/** Linking for React Native Web */
const linking = {
  prefixes: ["https://news.app"],
  config: {
    screens: {
      News: "/News",
      Reader: "/Reader",
    },
  },
};

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="News"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{
            title: "News",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Reader"
          component={ReaderScreen}
          options={{
            title: "Reader",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
