import React, { useEffect } from "react";

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
  Button,
  Pressable,
  Input,
} from "native-base";

import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../redux/reducers/appReducer";
import { SafeAreaView } from "react-native-safe-area-context";
import { Audio } from "expo-av";

function Settings({ navigation }) {
  const { secretNumber, userInput, textMessage, isGameOver, score, maxScore } =
    useSelector((state) => state.appSlice);
  const dispatch = useDispatch();
  const startOver = () => {
    navigation.goBack();
    dispatch(resetGame());
  };
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/music/winSong.mp3")
    );
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    playSound();
  }, []);

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center flex={1} p={2}>
        <Text>{secretNumber}</Text>
        <Text>Ура победа!!!</Text>
        <Button onPress={startOver} marginTop={3}>
          Играть еще
        </Button>
      </Center>
    </SafeAreaView>
  );
}

export default Settings;
