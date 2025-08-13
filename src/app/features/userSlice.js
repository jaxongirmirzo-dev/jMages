import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state, { payload }) => {
      state.user = null;
    },
    authReady: (state, { payload }) => {
      state.isAuthReady = true;
    },
  },
});

export const { login, logout, authReady } = userSlice.actions;
export default userSlice.reducer;
