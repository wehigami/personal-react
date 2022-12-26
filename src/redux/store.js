import { configureStore } from "@reduxjs/toolkit";
import nextImageSlice from './nextImageSlice';
import addNoteSlice from './addNoteSlice'
import noteCategorySlice from "./noteCategorySlice";

export const store = configureStore({
    reducer: {
      nextImage: nextImageSlice,
      addNoteToArr: addNoteSlice,
      noteCategory: noteCategorySlice,

    },
  });