// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getStudent = createAsyncThunk("getStudent", async (payload) => {
//   return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//     res.json()
//   );
// });

// export const studentSlice = createSlice({
//   name: "student",
//   initialState: { student: [], status: "" },
//   reducers: {},
//   extraReducers: {
//     [getStudent.pending]: (state, action) => {
//       state.status = "pending";
//     },
//     [getStudent.fulfilled]: (state, { payload }) => {
//       state.status = "success";
//       state.student = payload;
//     },
//     [getStudent.rejected]: (state, action) => {
//       state.status = "failed";
//     },
//   },
// });

// export default studentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getStudent = createAsyncThunk("getStudent", async (payload) => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
});

export const studentSlice = createSlice({
  name: "student",
  initialState: { student: [], status: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getStudent.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.student = payload;
      })
      .addCase(getStudent.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default studentSlice.reducer;
