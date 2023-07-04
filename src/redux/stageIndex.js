import { createSlice } from "@reduxjs/toolkit";

export const stageIndexSlice = createSlice({
    name: "stageIndex",
    initialState: {
        stageIndexCount: 0
    },
    reducers: {
        incrementStageIndex: (state) => {
            if(state.stageIndexCount < 13){
                state.stageIndexCount++;
                console.log(state.stageIndexCount)
            }
        },
        decrementStageIndex: (state) => {
            if(state.stageIndexCount > 0){
                state.stageIndexCount--;
                console.log(state.stageIndexCount)
            }
        }
    }
})

export const { incrementStageIndex, decrementStageIndex } = stageIndexSlice.actions;

export default stageIndexSlice.reducer;