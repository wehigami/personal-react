import { configureStore } from "@reduxjs/toolkit";
import nextImageSlice from './nextImageSlice';

export const store = configureStore({
    reducer: {
      nextImage: nextImageSlice,
    },
  });