import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
//import messageReducer from "./slices/message";
import { packageApi } from './services/package.service';

const reducer = {
  auth: authReducer,
  [packageApi.reducerPath]: packageApi.reducer,
  //message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(packageApi.middleware),
})

export default store;