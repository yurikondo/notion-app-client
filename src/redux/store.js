import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

//https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store
export const store = configureStore({
  reducer: { user: userReducer },
});
