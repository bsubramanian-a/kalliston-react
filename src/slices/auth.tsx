import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { setMessage } from "./message";

import AuthService from "../services/auth.service";

//const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
  "auth/register",
  async (email:string, thunkAPI) => {
    try {
      const response = await AuthService.register(email);
      //console.log("response from registration", response);
      //thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error:any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      //thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(await error.response.json());
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }:any, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password);
      return response;
    } catch (error:any) {
      return error.response;
      // const message =
      //   (error.response &&
      //     error.response.data &&
      //     error.response.data.message) ||
      //   error.message ||
      //   error.toString();
      //thunkAPI.dispatch(setMessage(message));
      //return thunkAPI.rejectWithValue(await error.response.json());
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

// const initialState = user
//   ? { isLoggedIn: true, user }
//   : { isLoggedIn: false, user: null };

const initialState = { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers: {
  }
});

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   // extraReducers: {
//   //   [register.fulfilled]: (state, action) => {
//   //     state.isLoggedIn = false;
//   //   },
//   //   [register.rejected]: (state, action) => {
//   //     state.isLoggedIn = false;
//   //   },
//   //   [login.fulfilled]: (state, action) => {
//   //     state.isLoggedIn = true;
//   //     state.user = action.payload.user;
//   //   },
//   //   [login.rejected]: (state, action) => {
//   //     state.isLoggedIn = false;
//   //     state.user = null;
//   //   },
//   //   [logout.fulfilled]: (state, action) => {
//   //     state.isLoggedIn = false;
//   //     state.user = null;
//   //   },
//   // },
// });

const { reducer } = authSlice;
export default reducer;