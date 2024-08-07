import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizEnd: false,
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    resultModalOpen(state) {
      state.quizEnd = true;
    },
    resultModalClose(state) {
      state.quizEnd = false;
    },
  },
});

export const resultActions = resultSlice.actions;
