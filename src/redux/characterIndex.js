import { createSlice } from "@reduxjs/toolkit";

export const characterIndexSlice = createSlice({
    name: "characterIndex",
    initialState: {
        characterIndexCount: 13
    },
    reducers: {
        incrementCharacterIndex: (state) => {
                state.characterIndexCount++;
                // console.log(state.characterIndexCount)
        },
        decrementCharacterIndex: (state) => {
            state.characterIndexCount--;
            // console.log(state.characterIndexCount)
        }
    }
})

export const { incrementCharacterIndex, decrementCharacterIndex } = characterIndexSlice.actions;

export default characterIndexSlice.reducer;