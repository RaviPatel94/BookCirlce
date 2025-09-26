import { createSlice } from "@reduxjs/toolkit";

const storedToken = localStorage.getItem("token");
const storedEmail = localStorage.getItem("email");
const storedUser = localStorage.getItem("user");

const initialState = {
  isAuthenticated: !!storedToken,
  name: storedUser ? JSON.parse(storedUser) : null,
  email: storedEmail ? JSON.parse(storedEmail) : null,
  token: storedToken || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.name = null;
      state.email = null;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
