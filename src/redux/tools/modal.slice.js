import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: { product: {} },
  reducers: {
    search: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { search } = modalSlice.actions;
export default modalSlice.reducer;
