import { createSlice } from "@reduxjs/toolkit";

export const noteCategory = createSlice({
  name: "add note to category",
  initialState: {
    categories: [
      {
        name: "All",
        notes: [],
        active: true,
        id: Math.random(),
      },
    ],
  },
  reducers: {
    addCategory: (state, action) => {
      state.categories.push({
        name: action.payload,
        notes: [],
        active: false,
        id: Math.random(),
      });
      console.log(action.payload);
    },
    setActiveNote: (state, action) => {
      const index = state.categories.findIndex((object) => {
        return object.name === action.payload;
      });

      const activeIndex = state.categories.findIndex((object) => {
        return object.active === true;
      });

      state.categories[activeIndex].active = false;
      state.categories[index].active = true;
    },
    addNote: (state, action) => {
      const index = state.categories.findIndex((object) => {
        return object.name === action.payload[0];
      });

      state.categories[index].notes.push(action.payload[1]);

      console.log(
        `category: ${action.payload[0]} note: ${action.payload[1].title}`
      );
    },
    delNote: (state, action) => {
      const index = state.categories.findIndex((category) => {
        return category.name === action.payload[0];
      });
      const noteIndex = state.categories[index].notes.findIndex((note) => {
        return note.id === action.payload[1];
      });

      state.categories[index].notes.splice(noteIndex);
    },
  },
});

const { actions, reducer } = noteCategory;
export const { addCategory, setActiveNote, addNote, delNote } = actions;
export default reducer;
