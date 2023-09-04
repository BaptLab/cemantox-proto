import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  word: undefined,
  ranking: undefined,
  temperature: undefined,
};

export const receivedAnswer = createSlice({
  name: "receivedAnswer",
  initialState,
  reducers: {
    setWord: (state, action) => {
      state.word = action.payload;
    },
    setRanking: (state, action) => {
      state.ranking = action.payload;
    },
    setTemperature: (state, action) => {
      state.temperature = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWord, setRanking, setTemperature } = receivedAnswer.actions;

export default receivedAnswer.reducer;
