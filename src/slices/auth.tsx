import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { setMessage } from "./message";

import AuthService from "../services/auth.service";

const coach = JSON.parse(localStorage.getItem("coach") || "{}");

export const register = createAsyncThunk(
  "auth/register",
  async (email:string, thunkAPI) => {
    try {
      const response = await AuthService.register(email);
      //console.log("response from registration", response);
      //thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error:any) {
      return error.response;
      // const message =
      //   (error.response &&
      //     error.response.data &&
      //     error.response.data.message) ||
      //   error.message ||
      //   error.toString();
      //thunkAPI.dispatch(setMessage(message));
      // return thunkAPI.rejectWithValue(await error.response.json());
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
    }
  }
);

export const otp = createAsyncThunk(
  "auth/otp",
  async ({ email, otp }:any, thunkAPI) => {
    console.log("otp coming in",otp);
    try {
      const response = await AuthService.otp(email, otp);
      return response;
    } catch (error:any) {
      return error.response;      
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
  return true;
});

const initialState = coach
  ? { isLoggedIn: true, coach }
  : { isLoggedIn: false, coach: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state) => {
      state.isLoggedIn = false;
    });

    builder.addCase(register.rejected, (state) => {
      state.isLoggedIn = false;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.coach = action.payload.coach;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.coach = null;
    });

    builder.addCase(logout.fulfilled, (state) => {
      console.log("coming inside logout fullfilled");
      state.isLoggedIn = false;
      state.coach = null;
    });
  }
});

const { reducer } = authSlice;
export default reducer;