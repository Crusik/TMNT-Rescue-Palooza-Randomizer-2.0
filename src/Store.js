import { configureStore  } from 'redux';

const initialState = {
  characters: [],
  stages: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return {
        ...state,
        characters: [...state.characters, action.character]
      };
    case 'REMOVE_CHARACTER':
      return {
        ...state,
        characters: state.characters.filter(
          character => character !== action.character
        )
      };
    case 'ADD_STAGE':
      return {
        ...state,
        stages: [...state.stages, action.stage]
      };
    case 'REMOVE_STAGE':
      return {
        ...state,
        stages: state.stages.filter(stage => stage !== action.stage)
      };
    default:
      return state;
  }
};

const store = configureStore(reducer);




const audioClips = ['tmntClear', 'tmntAreaClear', 'tmntStageClear'];

const removingClips = ["chucker", "jose", "vanish", "punker", "30seconds", "april", "listen", "splinter", "theRat"]
// Actual x,y values
let x = 0;
let y = 13;
// for quick testing
// let x = 12;
// let y = 46;
export const Buttons = () => {
    const allButtons = document.querySelectorAll('button');
    const stageButton = document.getElementById("stageButton");
    const characterButton = document.getElementById("characterButton");
    const removeStageButton = document.getElementById("removeStageButton");
    const removeCharacterButton = document.getElementById("removeCharacterButton");
    
    function disableButtons() {
        allButtons.forEach(button => {
            button.disabled = true;
        })
    }
    
    function removeButtonsCheck() {
        if ((y === 13) || ((y - 13)/2 === x)) {
            removeCharacterButton.disabled = true;
            if ((x === 0) || ((y - 13)/2 != x)) {
                removeStageButton.disabled = true;
            } else {
                return;
            }
        } else if ((x === 0) || ((y - 13)/2 != x)) {
            removeStageButton.disabled = true;
        } else {
            removeCharacterButton.disabled = false;
            removeStageButton.disabled = false;
        }
    }

    function enableButtons() {
        allButtons.forEach(button => {
            button.disabled = false;
        });
        // This keep the Stage Button disabled after the very first character is picked since you need to pick two before picking the stage.
        // disableStageButton();
    }
}
const allButtons = document.querySelectorAll('button');
const stageButton = document.getElementById("stageButton");
const characterButton = document.getElementById("characterButton");
const removeStageButton = document.getElementById("removeStageButton");
const removeCharacterButton = document.getElementById("removeCharacterButton");

function disableButtons() {
    allButtons.forEach(button => {
        button.disabled = true;
    })
}

function removeButtonsCheck() {
    if ((y === 13) || ((y - 13)/2 === x)) {
        removeCharacterButton.disabled = true;
        if ((x === 0) || ((y - 13)/2 != x)) {
            removeStageButton.disabled = true;
        } else {
            return;
        }
    } else if ((x === 0) || ((y - 13)/2 != x)) {
        removeStageButton.disabled = true;
    } else {
        removeCharacterButton.disabled = false;
        removeStageButton.disabled = false;
    }
}

// if (x === 0) || ((y - 13)/2 != x) {
//     removeStageButton.disabled = true;
// }

function stageAndCharacterCheck(){
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

function disableOneButton(button) {
    button.disabled = true;
}

function enableButtons() {
    allButtons.forEach(button => {
        button.disabled = false;
    });
    // This keep the Stage Button disabled after the very first character is picked since you need to pick two before picking the stage.
    // disableStageButton();
}

function enableRemoveButtons(button1, button2) {
    button1.disabled = false;
    button2.disabled = false;
}

export const randomRemovalSound = () => {
    var index = Math.floor(Math.random() * 1000) % removingClips.length;
    var id = removingClips[index];
    var audioElement2 = document.getElementById(id);
    audioElement2.play();
}
// Disables Stage Button since you need to pick two characters first before picking the stage.
function disableStageButton() {
    if (y < 15) {
        stageButton.disabled = true;
        removeButtonsCheck()
    }
}
// Makes the default state of the Stage button disabled until 2 characters have been selected.
disableStageButton();

// To play voice clilp
// function playVoice() {
//     for (var i = 0; i < characterList.length; i++) {
//         if (characters.textContent === characterList[i]["character"]) {
//             characterList[i]['voice'].play();
//         }
//     }
//     // let characterVoice = characterList[i].voice;
//     // characterVoice.play();
// }

function randomStageSound() {
    var index = Math.floor(Math.random() * 1000) % audioClips.length;
    var id = audioClips[index];
    var audioElement = document.getElementById(id);
    audioElement.play();
}

function completed() {
    let cowabungaLogo = document.getElementById("cowabunga-logo");
    let cowabunga = document.getElementById("cowabunga");
    // let cowabungaLogo = document.getElementById("cowabunga-logo");
        cowabunga.play();
        // Logo needs to fade-in for 2 second, stay until the page is clicked anywhere, then fade-out.
        cowabungaLogo.classList.add('fadeIn');
        if (cowabungaLogo.classList.contains('fadeIn')) {
            disableButtons(removeStageButton, removeCharacterButton);
        cowabungaLogo.addEventListener("click", function() {
                // I am pretty sure the following is what is messing up the remove buttons not being disabled when I press them when all characters and stages are selected.
                // if (stageButton.disabled == true && characterButton.disabled == true) {
                //     if (removeCharacterButton.disabled == true && removeStageButton.disabled == true) {
            if (cowabungaLogo.classList.contains('fadeIn')) {
                stageAndCharacterCheck();
                enableRemoveButtons(removeStageButton, removeCharacterButton);
            } else {
                return;
            }
            cowabungaLogo.classList.remove('fadeIn');
            })
    }
}