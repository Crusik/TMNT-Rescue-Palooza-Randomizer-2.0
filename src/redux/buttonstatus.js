import { createSlice } from "@reduxjs/toolkit";

export const buttonStatusSlice = createSlice({
  name: "buttonStatus",
  initialState: {
    stageButton: "disabled",
    characterButton: "enabled",
    removeStageButton: "disabled",
    removeCharacterButton: "disabled",
  },
  reducers: {
    enableButton: (state, action) => {
      const { buttonId } = action.payload;
      state[buttonId] = "enabled";
    },
    disableButton: (state, action) => {
      const { buttonId } = action.payload;
      state[buttonId] = "disabled";
    },
    disableAllButtons: (state) => {
        state.stageButton = "disabled";
        state.characterButton = "disabled";
        state.removeStageButton = "disabled";
        state.removeCharacterButton = "disabled";
    },
  },
});

export const { enableButton, disableButton, disableAllButtons  } = buttonStatusSlice.actions;

export default buttonStatusSlice.reducer;
