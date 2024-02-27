import { createSlice } from "@reduxjs/toolkit";
export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: "",
  reducers: {
    changeRoute: (state, action) => {
      console.log(action);
      console.log(payload);
      state = payload;
    },
  },
});

export const { changeRoute } = sidebarSlice.actions;
export default sidebarSlice.reducer;
