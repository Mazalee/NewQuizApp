import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.modalOpen = true;
    },

    closeModal(state) {
      state.modalOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;
