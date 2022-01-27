import React, { useEffect } from "react";

import {
  Text,
  HStack,
  Center,
  Heading,
  View,
  Pressable,
  Input,
} from "native-base";
import { ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  generateSecretNumber,
  checkUserInput,
  handleUserValue,
  resetGame,
} from "../redux/reducers/appReducer";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const image = require("../../assets/pexels-eftychia-syrimi-10866687.jpg");

function MainScreen({ navigation }) {
  const { secretNumber, userInput, textMessage, isGameOver, score, maxScore } =
    useSelector((state) => state.appSlice);
  // console.log(navigation);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateSecretNumber());
  }, []);

  const handLeInputValue = (e: any) => {
    dispatch(handleUserValue(e));
  };
  const checkGuess = () => {
    dispatch(checkUserInput());
  };
  const startOver = () => {
    dispatch(resetGame());
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        resizeMode='cover'
        source={image}
        style={{ flex: 1, paddingHorizontal: 10 }}
      >
        <Center>
          <Heading marginTop={5} textAlign={"center"} color={"#ae2012"}>
            А ты сможешь угодать мое секретное число ?
          </Heading>
        </Center>
        <HStack marginTop={10} justifyContent={"space-between"}>
          <Pressable onPress={startOver}>
            <Text fontSize={16} bold color={"#FF8000"}>
              Попробовать снова
            </Text>
          </Pressable>
          <Text fontSize={16} bold color={"#FF8000"}>
            число от 1 до 20
          </Text>
        </HStack>
        <View flex={1} justifyContent={"center"} alignItems={"center"}>
          {isGameOver ? (
            <Text bold color={"white"} fontSize={32}>
              {secretNumber}
            </Text>
          ) : (
            <AntDesign name='questioncircle' size={64} color='black' />
          )}
          <Text bold color={"white"}>
            {textMessage}
          </Text>
        </View>
        <HStack mb={5} justifyContent={"space-between"}>
          <View>
            <Input
              backgroundColor={"black"}
              color={"white"}
              onChangeText={handLeInputValue}
              mb='2'
              keyboardType='numeric'
              maxLength={3}
              value={userInput}
            />
            <Pressable
              style={{
                // width: 75,
                backgroundColor: "grey",
                padding: 10,
                alignItems: "center",
                borderRadius: 5,
              }}
              disabled={isGameOver}
              onPress={checkGuess}
            >
              <Text>Проверить</Text>
            </Pressable>
          </View>

          <View alignSelf={"center"}>
            <Text color={"white"}>Попыток:{score}</Text>
            {/* <Text>text</Text> */}
            <Text color={"white"}>Лучший результат: {maxScore}</Text>
          </View>
        </HStack>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default MainScreen;
