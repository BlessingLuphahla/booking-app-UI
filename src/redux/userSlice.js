import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.loading = true;
    },

    updateUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.loading = true;
    },

    logout: (state) => {
      state.username = "";
      state.email = "";
      state.loading = false;
    },
  },
});

export const { login, updateUser, logout } = userSlice.actions;
export default userSlice.reducer;
