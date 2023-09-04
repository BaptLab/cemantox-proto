import { configureStore } from "@reduxjs/toolkit";
import answersReducer from "../redux/slices/answersSlice";
import receivedAnswerReducer from "./slices/receivedAnswerSlice";

export const store = configureStore({
  reducer: {
    answer: answersReducer,
    receivedAnswer: receivedAnswerReducer,
  },
});
