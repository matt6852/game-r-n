import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./screens/MainScreen";
import WinScreen from "./screens/WinnScreen";
import { navigationRef } from "../RootNavigation";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='WinScreen'
          component={WinScreen}
          options={{ title: "Играть сноваы" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
