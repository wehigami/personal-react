import { createSlice } from "@reduxjs/toolkit";

export const loginActive = createSlice({
    name: 'Is Login Active',
    initialState: {
        active: false,
    },
    reducers: {
        activateLogin: (state) => {
            state.active = !state.active;
            console.log(state.active);
        },
    }
});

const { actions, reducer } = loginActive;
export const { activateLogin } = actions;
export default reducer;