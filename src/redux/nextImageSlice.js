import { createSlice } from "@reduxjs/toolkit";

export const nextImageSlice = createSlice({
    name: 'Next Image',
    initialState: {
        image: 0,
    },
    reducers: {
        incNextImage: (state, action) => {
            let arrLen = action.payload - 1;
            if(state.image < arrLen) {
                state.image += 1;

            }
        },
        decNextImage: (state) => {
            if(state.image > 0) {
                state.image -= 1;
            }
        }
    }
});

const { actions, reducer } = nextImageSlice;
export const { incNextImage, decNextImage } = actions;
export default reducer;