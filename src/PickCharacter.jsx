import React from 'react';
import './Sidebar';
import {randomStageSound, disableButtons, minTimer, maxTimer, stageAndCharacterCheck} from './JSPlaceholder'
import { gsap } from 'gsap';
import { useSelector } from 'react-redux';

// export let characterButton = document.getElementById('characterButton');

const PickCharacter = (props) => {
    // const { y } = props;
    const { setY } = props;
    const { x } = props;
    const stageListData = useSelector((state) => state.stageList.stageListData);
    const activeCharacters = stageListData.flatMap(stage =>
        stage.characters
          .filter(character => character.isActive)
          .map(character => character.character)
        );
    // const { setX } = props;
    let y = 13;
    const handleCharacterSelection = () => {
        console.log(y)
        const minTimer = 10;
        const maxTimer = 20;
        let headerCharacters = document.getElementById('headerCharacters')
        randomStageSound();
        disableButtons();
        function characterTimer(min, max) {
            let i = 0;
            // Indexes through the list of characters that are available, then stops at a random time to pick a character.
            let intervalHandle = setInterval(function() {
                headerCharacters.textContent = activeCharacters[i++ % activeCharacters.length];
            }, 60);
            var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between min - max
            console.log(rand / 2 + ' seconds');
            setTimeout(function() {
                clearInterval(intervalHandle);
            }, 500 * rand);
            function displayCharacter() {
                setTimeout(() => {
                    // Selecting the character Divs which will start at 13 and increase +1 each time this is ran.
                    let characters = document.getElementById(y);
                    characters.textContent = headerCharacters.textContent;
                    // Animation via gsap
                    const tl = gsap.timeline({ defaults: { ease: "power0.out" } });
                    tl.to(characters, { autoAlpha: "1", duration: 1 });
                    tl.to(characters, { transform: "translateX(0)", duration: 1 }, "-=1");
                    // Name of the next selected character
                    // const randomCharacter = document.querySelector("#headerNames");
                    // const randomPick = randomCharacter.textContent;
                    if (y < 47){
                        y++;
                    }
                    // Allow the button to be pressed again for the next character once a character is picked.
                    // playVoice();
                    stageAndCharacterCheck(x);
                }, 500 * rand + 50)
            }
            displayCharacter();
        }
        characterTimer(minTimer, maxTimer)
    }

    return (
        <>
            <header>Character Picker</header>
            <h1 id='headerCharacters'>?</h1>
            <button onClick={handleCharacterSelection} className="button" id="characterButton">Start</button>
        </>
    )
}

export default PickCharacter;