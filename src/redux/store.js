import { configureStore } from "@reduxjs/toolkit";
import nextImageSlice from './nextImageSlice';
import noteCategorySlice from "./noteCategorySlice";
import loginActiveSlice from "./loginActiveSlice";

export const store = configureStore({
    reducer: {
      nextImage: nextImageSlice,
      noteCategory: noteCategorySlice,
      loginActive: loginActiveSlice,
    },
  });