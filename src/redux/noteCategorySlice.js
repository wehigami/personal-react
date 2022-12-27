import { createSlice } from "@reduxjs/toolkit";

export const noteCategory = createSlice({
  name: "add note to category",
  initialState: {
    categories: [
      {
        name: "All",
        notes: [],
        active: true,
      },
    ],
    errorMessage: false,
  },
  reducers: {
    addCategory: (state, action) => {
      const index = state.categories.findIndex((object) => {
        return object.name === action.payload;
      });
      //pushes an object into the categories array, with a set category name - adds new category to the array

      if (state.categories[index]) {
        state.errorMessage = true;
        console.log("found a note with the same name");
      } else {
        //else create a new note
        state.categories.push({
          name: action.payload,
          notes: [],
          active: false,
        });
        state.errorMessage = false;
      }

      console.log(action.payload);
    },

    setActiveNote: (state, action) => {
      //find index of an object with the provided name
      const index = state.categories.findIndex((object) => {
        return object.name === action.payload;
      });

      //find the object/category with the currently active index
      const activeIndex = state.categories.findIndex((object) => {
        return object.active === true;
      });

      //set the previosly active category to false
      state.categories[activeIndex].active = false;
      //set the new category to active
      state.categories[index].active = true;
    },

    addNote: (state, action) => {
      //find the category that matches the provided id
      const index = state.categories.findIndex((object) => {
        return object.name === action.payload[0];
      });
      console.log(action.payload[1]);

      //find the note that matches the provided name
      const noteIndex = state.categories[index].notes.findIndex((obj) => {
        return obj.title === action.payload[1].title;
      });

      //if a note with the same name as provided exists, throw an error message
      if (state.categories[index].notes[noteIndex]) {
        state.errorMessage = true;
        console.log("found a note with the same name");
      } else {
        //else create a new note
        state.categories[index].notes.push(action.payload[1]);
        state.errorMessage = false;
      }
    },
    delNote: (state, action) => {
      const index = state.categories.findIndex((category) => {
        return category.name === action.payload[0];
      });
      const noteIndex = state.categories[index].notes.findIndex((note) => {
        return note.title === action.payload[1];
      });

      state.categories[index].notes.splice(noteIndex, 1);
    },
  },
});

const { actions, reducer } = noteCategory;
export const { addCategory, setActiveNote, addNote, delNote } = actions;
export default reducer;
