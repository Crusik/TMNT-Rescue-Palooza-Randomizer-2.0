import React from 'react';
import './Sidebar';
import {randomStageSound, disableButtons, minTimer, maxTimer, stageAndCharacterCheck} from './JSPlaceholder'
import { gsap } from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCharacterIndex } from './redux/characterIndex';

const PickCharacter = (props) => {
    const dispatch = useDispatch();
    const stageListData = useSelector((state) => state.stageList.stageListData);
    const characterIndex = useSelector((state) => state.characterIndex.characterIndexCount);
    const activeCharacters = stageListData.flatMap(stage =>
        stage.characters
          .filter(character => character.isActive)
          .map(character => character.character)
        );
    const handleCharacterSelection = () => {
        console.log(characterIndex)
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
                    let characters = document.getElementById(characterIndex);
                    characters.textContent = headerCharacters.textContent;
                    // Animation via gsap
                    const tl = gsap.timeline({ defaults: { ease: "power0.out" } });
                    tl.to(characters, { autoAlpha: "1", duration: 1 });
                    tl.to(characters, { transform: "translateX(0)", duration: 1 }, "-=1");
                    if (characterIndex < 47){
                        dispatch(incrementCharacterIndex());
                    }
                    // Allow the button to be pressed again for the next character once a character is picked.
                    // playVoice();
                    stageAndCharacterCheck();
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