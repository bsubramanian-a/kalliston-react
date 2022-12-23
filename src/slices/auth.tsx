import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { setMessage } from "./message";

import AuthService from "../services/auth.service";

const coach = JSON.parse(localStorage.getItem("coach") || "{}");

export const register = createAsyncThunk(
  "auth/register",
  async (email:string, thunkAPI) => {
    try {
      const response = await AuthService.register(email);
      return response.data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response); 
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
      return thunkAPI.rejectWithValue(error.response);      
    }
  }
);

export const coachUpdateProfile = createAsyncThunk(
  "auth/coach-update-profile",
  async ({ email, firstname, lastname }:any, thunkAPI) => {
    console.log("coach profile", firstname)
    try {
      const response = await AuthService.coachUpdateProfile(email, firstname, lastname);
      return response;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response);      
    }
  }
);

export const coachUpdateProfilePic = createAsyncThunk(
  "auth/coach-update-profile-pic",
  async (image:any, thunkAPI) => {
    console.log("coach image", image)
    try {
      const response = await AuthService.coachUpdateProfilePic(image);
      return response;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response);      
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
      console.log("error auth otp", error);
      return thunkAPI.rejectWithValue(error.response);  
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
  return true;
});

export const forget = createAsyncThunk(
  "auth/forget",
  async (email:string, thunkAPI) => {
    try {
      const response = await AuthService.forget(email);
      return response.data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response); 
    }
  }
);

export const forgetotp = createAsyncThunk(
  "auth/forgetotp",
  async ({ email, otp }:any, thunkAPI) => {
    console.log("otp coming in",otp);
    try {
      const response = await AuthService.forgetotp(email, otp);
      return response;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response);       
    }
  }
);

export const changepassword = createAsyncThunk(
  "auth/forgetotp",
  async ({ email, currentpassword, newpassword }:any, thunkAPI) => {
    console.log("email",email);
    console.log("currentpassword",currentpassword);
    console.log("newpassword",newpassword);
    try {
      const response = await AuthService.changepassword(email, currentpassword,newpassword);
      return response;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response);       
    }
  }
);

const initialState = (coach
  && Object.keys(coach).length === 0
  && Object.getPrototypeOf(coach) === Object.prototype)
    ? { isLoggedIn: false, coach:null }
    : { isLoggedIn: true, coach };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  }, 
  extraReducers: (builder) => {
    builder.addCase(coachUpdateProfile.fulfilled, (state, action) => {
      state.coach = action.payload.coach;
    });

    builder.addCase(register.fulfilled, (state) => {
      state.isLoggedIn = false;
    });

    builder.addCase(register.rejected, (state) => {
      state.isLoggedIn = false;
    });

    builder.addCase(otp.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.coach = action.payload.coach;
    });

    builder.addCase(coachUpdateProfilePic.fulfilled, (state, action) => {
      state.coach = action.payload.coach;
    });

    builder.addCase(otp.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.coach = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.coach = null;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.coach = null;
    });

    builder.addCase(forget.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.coach = null;
    });

    builder.addCase(forget.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.coach = null;
    });

    builder.addCase(forgetotp.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.coach = null;
    });

    builder.addCase(forgetotp.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.coach = null;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.coach = null;
    });
  }
});

const { reducer } = authSlice;
export default reducer;