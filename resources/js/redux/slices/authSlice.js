import { createSlice } from "@reduxjs/toolkit";
import { createUser, getLoggedUser, loginUser } from "../actions/authAction";

const initialState = {
  user: [],
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    // create User
    [createUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // login User
    [loginUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // get Logged user
    [getLoggedUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getLoggedUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [getLoggedUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
