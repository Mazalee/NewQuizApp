import { configureStore } from "@reduxjs/toolkit";
import { questionSlice } from "./features/questionSlice";
import { modalSlice } from "./features/modalSlice";
import { resultSlice } from "./features/resultSlice";

export const store = configureStore({
  reducer: {
    questions: questionSlice.reducer,
    modal: modalSlice.reducer,
    result: resultSlice.reducer,
  },
});
