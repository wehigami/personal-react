import { configureStore } from "@reduxjs/toolkit";
import nextImageSlice from './nextImageSlice';
import noteCategorySlice from "./noteCategorySlice";

export const store = configureStore({
    reducer: {
      nextImage: nextImageSlice,
      noteCategory: noteCategorySlice,

    },
  });