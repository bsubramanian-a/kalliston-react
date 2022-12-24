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
    try {
      const response = await AuthService.coachUpdateProfile(email, firstname, lastname);
      return response;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response);      
    }
  }
);

export const getCardDetails = createAsyncThunk(
  "auth/get-card-details",
  async (_:void, thunkAPI) => {
    try {
      const response = await AuthService.getCardDetails();
      return response;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response);      
    }
  }
);

export const addCard = createAsyncThunk(
  "auth/add-card",
  async ({ card_number, card_holder_name, expiry_date, cvv, billing_address1, billing_address2, city, country}:any, thunkAPI) => {
    try {
      const response = await AuthService.addCard( card_number, card_holder_name, expiry_date, cvv, billing_address1, billing_address2, city, country );
      return response;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response);      
    }
  }
);

export const coachUpdateNotification = createAsyncThunk(
  "auth/coach-update-notification",
  async ({ email_notification, otp_required, client_request_notification, message_from_client }:any, thunkAPI) => {
    try {
      const response = await AuthService.coachUpdateNotification(email_notification, otp_required, client_request_notification, message_from_client);
      return response;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response);      
    }
  }
);

export const coachUpdateBilling = createAsyncThunk(
  "auth/coach-update-billing",
  async ({ billing_address1, billing_address2, city, country }:any, thunkAPI) => {
    try {
      const response = await AuthService.coachUpdateBilling(billing_address1, billing_address2, city, country);
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
  "auth/change-password",
  async ({ email, currentpassword, newpassword }:any, thunkAPI) => {
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
    ? { isLoggedIn: false, coach:null, card:null }
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

    builder.addCase(coachUpdateNotification.fulfilled, (state, action) => {
      state.coach = action.payload.coach;
    });

    builder.addCase(coachUpdateBilling.fulfilled, (state, action) => {
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

    builder.addCase(getCardDetails.fulfilled, (state, action) => {
      state.card = action.payload.card;
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

    builder.addCase(addCard.fulfilled, (state, action) => {
      state.card = action.payload.card;
    });
  }
});

const { reducer } = authSlice;
export default reducer;