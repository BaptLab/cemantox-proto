import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.push(action.payload);
    },
    resetAllAnswer: (state) => {
      state.length = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAnswer, resetAllAnswer } = answersSlice.actions;

export default answersSlice.reducer;
