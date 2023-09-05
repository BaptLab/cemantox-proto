import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      //si l'élément est déjà présent dans la liste, on en l'ajoute pas à nouveau
      if (
        JSON.parse(JSON.stringify(state)).some((element) => {
          console.log("element", element, "word Submitted", action.payload);
          return element.word === action.payload.word;
        })
      )
        console.log("le mot est déjà dans la liste !");
      else if (action.payload === undefined) {
        console.log("Je n'ai pas compris le mot !");
      } else {
        return [...state, action.payload];
      }
    },
    resetAllAnswer: (state) => {
      state.length = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAnswer, resetAllAnswer } = answersSlice.actions;

export default answersSlice.reducer;
