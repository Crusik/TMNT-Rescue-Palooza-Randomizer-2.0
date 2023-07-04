import { createSlice } from "@reduxjs/toolkit";

export const stageIndexSlice = createSlice({
    name: "stageIndex",
    initialState: {
        stageIndexCount: 0
    },
    reducers: {
        increment: (state) => {
            if(state.stageIndexCount < 13){
                state.stageIndexCount++;
                console.log(state.stageIndexCount)
            }
        },
        decrement: (state) => {
            if(state.stageIndexCount > 0){
                state.stageIndexCount--;
                console.log(state.stageIndexCount)
            }
        }
    }
})

export const { increment, decrement } = stageIndexSlice.actions;

export default stageIndexSlice.reducer;