// This will be the central "Hub" for the application. Keeping track of the Stage and Character lists
import { gsap } from 'gsap';

// The following will add a list on screen as well as a Sprite for all the available characters. Still needs stuff to work.
// {characterList.map((character) => <Character name={character.name} sprite={character.sprite} />)}

export default function Main () {
    let allButtons = document.querySelectorAll('button');

    let audioClips = ['tmntClear', 'tmntAreaClear', 'tmntStageClear'];

    let removingClips = ["chucker", "jose", "vanish", "punker", "30seconds", "april", "listen", "splinter", "theRat"];

    let i = 0;
    // Actual x,y values
    let x = 0;
    let y = 13;
    const minTimer = 10;
    const maxTimer = 20;
    // for quick testing
    // let x = 12;
    // let y = 46;
    const stageButton = document.getElementById("stageButton");
    const characterButton = document.getElementById("characterButton");
    const removeStageButton = document.getElementById("removeStageButton");
    const removeCharacterButton = document.getElementById("removeCharacterButton");
    let selectedStages = [];

    function enableButtons() {
        allButtons.forEach(button => {
            button.disabled = false;
        });
        // This keep the Stage Button disabled after the very first character is picked since you need to pick two before picking the stage.
        // disableStageButton();
    }

    function disableButtons() {
        allButtons.forEach(button => {
            button.disabled = true;
        })
    }

    function enableRemoveButtons(button1, button2) {
        button1.disabled = false;
        button2.disabled = false;
    }

    function removeButtonsCheck() {
        if ((y === 13) || ((y - 13)/2 === x)) {
            removeCharacterButton.disabled = true;
            if ((x === 0) || ((y - 13)/2 !== x)) {
                removeStageButton.disabled = true;
            } else {
                return;
            }
        } else if ((x === 0) || ((y - 13)/2 !== x)) {
            removeStageButton.disabled = true;
        } else {
            removeCharacterButton.disabled = false;
            removeStageButton.disabled = false;
        }
    }

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

    function randomRemovalSound() {
        var index = Math.floor(Math.random() * 1000) % removingClips.length;
        var id = removingClips[index];
        var audioElement2 = document.getElementById(id);
        audioElement2.play();
    }

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

    // This needs to be addjusted so that on the 2nd run, the character list is updated without the first character selection
    function runTwice(func) {
        disableButtons()
        func()
        setTimeout(()=> {
            disableButtons()
            func()
            setTimeout(()=> {
                stageAndCharacterCheck();
            }, 10000);
        }, 10000)
        // }, 500 * rand + 3000);
    }

    function removalAnimation(lastEntry) {
        const tl = gsap.timeline({ defaults: { ease: "power0.out" } });
        tl.to(lastEntry, { transform: "translateX(-100%)", duration: 1 });
        tl.to(lastEntry, { autoAlpha: "0", duration: 1 }, "-=1");
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

}