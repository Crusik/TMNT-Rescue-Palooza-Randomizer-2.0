import { createSlice } from "@reduxjs/toolkit";

export const characterIndexSlice = createSlice({
    name: "characterIndex",
    initialState: {
        characterIndexCount: 13
    },
    reducers: {
        incrementCharacterIndex: (state) => {
            state.characterIndexCount++;
        },
        decrementCharacterIndex: (state) => {
            state.characterIndexCount--;
        }
    }
})

export const { incrementCharacterIndex, decrementCharacterIndex } = characterIndexSlice.actions;

export default characterIndexSlice.reducer;