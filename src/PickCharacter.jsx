import React, { useState } from 'react';
import './Sidebar';
import {randomStageSound, disableButtons, minTimer, maxTimer} from './JSPlaceholder'
import { gsap } from 'gsap';

// export let characterButton = document.getElementById('characterButton');

const PickCharacter = (props) => {
    const { y } = props;
    const { setY } = props;
    const handleCharacterSelection = () => {
        // console.log(y)
        let headerCharacters = document.getElementById('headerCharacters')
        let characterList = [
            {
            id: 1,
            character: "Don",
            isActive: true,
            count: 0
            },
            {
            id: 2,
            character: "Leo",
            isActive: true,
            count: 0
            },
            {
            id: 3,
            character: "Mikey",
            isActive: true,
            count: 0
            },
            {
            id: 4,
            character: "Raph",
            isActive: true,
            count: 0
            
            },
        ]

        const incrementY = () => {
            setY(prevY => prevY + 1);
        }
        // let {characterList} = props;
        let i = 0;
        randomStageSound();
        disableButtons();
        function characterTimer(min, max) {
            console.log(y)
            // Indexes through the list of characters that are available, then stops at a random time to pick a character.
            let intervalHandle = setInterval(function() {
                headerCharacters.textContent = characterList[i++ % characterList.length]["character"];
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
                        incrementY();
                    }
                    // Allow the button to be pressed again for the next character once a character is picked.
                    // playVoice();
                    // stageAndCharacterCheck();
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