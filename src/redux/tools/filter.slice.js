import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: { q: "" },
  reducers: {
    search: (state, action) => {
      state.q = action.payload;
    },
  },
});

export const { search } = filterSlice.actions;
export default filterSlice.reducer;
