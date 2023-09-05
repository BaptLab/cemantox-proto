import { configureStore } from "@reduxjs/toolkit";
import answersReducer from "../redux/slices/answersSlice";

export const store = configureStore({
  reducer: {
    answer: answersReducer,
  },
});
