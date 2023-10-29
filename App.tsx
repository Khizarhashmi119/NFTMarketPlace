import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import Details from "./screens/Details";
import Home from "./screens/Home";

import { assets } from "./constants";

import { TAppParamList } from "./types/paramList/AppParamList";

const Stack = createNativeStackNavigator<TAppParamList>();

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const { InterBold, InterLight, InterMedium, InterRegular, InterSemiBold } =
  assets;

SplashScreen.preventAutoHideAsync();

const App = (): JSX.Element | null => {
  const [fontsLoaded] = useFonts({
    InterBold,
    InterLight,
    InterMedium,
    InterRegular,
    InterSemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
