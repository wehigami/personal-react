import { configureStore } from "@reduxjs/toolkit";
import nextImageSlice from './nextImageSlice';
import addNoteSlice from './addNoteSlice'

export const store = configureStore({
    reducer: {
      nextImage: nextImageSlice,
      addNoteToArr: addNoteSlice,

    },
  });