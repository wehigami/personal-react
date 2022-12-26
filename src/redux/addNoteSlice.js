import { createSlice } from "@reduxjs/toolkit";

export const addNoteToArr = createSlice({
  name: "Add Note",
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
      console.log(action.payload);
    },
    delNote: (state, action) => {
      const index = state.notes.findIndex(object => {
        return object.id === action.payload;
      })

      state.notes.splice(index);
      console.log(index);
    }
  },
});

const { actions, reducer } = addNoteToArr;
export const { addNote, delNote } = actions;
export default reducer;
