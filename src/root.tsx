import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  View,
} from "native-base";

import MainScreen from "./screens/MainScreen";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};
import App1 from "./router";

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        {/* <MainScreen /> */}
        <App1 />
      </NativeBaseProvider>
    </Provider>
  );
}

// Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems='center'>
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light" ? true : false}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
