import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
