import { createSlice } from "@reduxjs/toolkit";

export const addNoteToArr = createSlice({
    name: 'addNote',
    initialState: {
        notes: [],
    },
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
            console.log(action.payload);
        }
    }
});

const { actions, reducer } = addNoteToArr;
export const { addNote } = actions;
export default reducer;