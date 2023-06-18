import React from 'react';

const StageAndCharacterCheck = () => {
    enableButtons();
    // This will check if either the all the characters or stages have been selected and will disable the corresponding button(s).
    if (y === 47 && x === 13) {
        // This means all selections have been made and will play "Cowabunga" while both "Picker" buttons are now disabled.
        completed();
        stageButton.disabled = true;
        characterButton.disabled = true;
    } else if ((x === 13) || (y - 13 - (x * 2) < 2)) {
        stageButton.disabled = true;
        removeButtonsCheck()
    } else if ((y === 47) || (y - 13 - (x * 2) === 2)) {
        characterButton.disabled = true;
        removeButtonsCheck()
    } else {
        characterButton.disabled = false;
        stageButton.disabled = false;
        removeButtonsCheck()
    }
}

export default StageAndCharacterCheck;