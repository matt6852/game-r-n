import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigate } from "../../../RootNavigation";

export interface appState {
  secretNumber: number;
  userInput: string;
  textMessage: string;
  isGameOver: boolean;
  score: number;
  maxScore: number;
}

const initialState: appState = {
  secretNumber: 0,
  userInput: "",
  textMessage: "",
  isGameOver: false,
  score: 10,
  maxScore: 0,
};

export const AppSlice = createSlice({
  name: "AppState",
  initialState,
  reducers: {
    generateSecretNumber: (state) => {
      state.secretNumber = Math.floor(Math.random() * 20) + 1;
    },
    checkUserInput: (state) => {
      const { secretNumber, userInput } = state;
      if (state.score > 1 && !state.isGameOver) {
        if (userInput) {
          state.score--;
          if (+userInput < secretNumber) {
            state.textMessage = "Слишком мало!";
          } else if (+userInput > secretNumber) {
            state.textMessage = "Слишком много!";
          } else if (secretNumber === +userInput) {
            state.textMessage = "Победа!!!";
            state.score++;
            navigate("WinScreen");

            state.isGameOver = true;
            state.userInput = "";
            if (state.maxScore < state.score) {
              state.maxScore = state.score;
            }
          }
        } else {
          state.textMessage = "Введите число!";
        }
      } else {
        state.isGameOver = true;
        state.textMessage = "Проиграл";
        state.score = 0;
      }
    },
    handleUserValue: (state, action: PayloadAction<string>) => {
      if (!state.isGameOver) {
        state.userInput = action.payload;
        if (action.payload) {
          state.textMessage = "";
        }
      }
    },
    resetGame: (state) => {
      (state.secretNumber = Math.floor(Math.random() * 20) + 1),
        (state.userInput = ""),
        (state.textMessage = ""),
        (state.isGameOver = false),
        (state.score = 10);
    },
  },
});

export const {
  generateSecretNumber,
  handleUserValue,
  checkUserInput,
  resetGame,
} = AppSlice.actions;
export default AppSlice.reducer;
