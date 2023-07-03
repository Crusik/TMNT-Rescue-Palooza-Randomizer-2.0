import { createSlice } from "@reduxjs/toolkit";

export const buttonStatusSlice = createSlice({
  name: "buttonStatus",
  initialState: {
    stageButton: "disabled",
    characterButton: "enabled",
    // button3: "enabled",
    // button4: "enabled",
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
    disableBothButtons: (state) => {
        state.stageButton = "disabled";
        state.characterButton = "disabled";
    },
  },
});

export const { enableButton, disableButton, disableBothButtons  } = buttonStatusSlice.actions;

export default buttonStatusSlice.reducer;
