import { configureStore } from "@reduxjs/toolkit";
import isLoggedInSlice from "../modules/userAuth";

const store = configureStore({
  reducer: {
    isLoggedIn: isLoggedInSlice,
  },
});

export default store;
