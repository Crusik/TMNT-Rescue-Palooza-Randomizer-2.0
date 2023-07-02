import { createSlice } from "@reduxjs/toolkit";

export const stageIndexSlice = createSlice({
    name: "stageIndex",
    initialState: {
        stageIndexCount: 0
    },
    reducers: {
        increment: (state) => {
            state.stageIndexCount++;
            console.log(state.stageIndexCount)
        },
        decrement: (state) => {
            state.stageIndexCount--;
        }
    }
})

export const { increment, decrement } = stageIndexSlice.actions;

export default stageIndexSlice.reducer;