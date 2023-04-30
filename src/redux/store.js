import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import memoReducer from "./features/memoSlice";

//https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store
export const store = configureStore({
  reducer: { user: userReducer, memo: memoReducer },
});
