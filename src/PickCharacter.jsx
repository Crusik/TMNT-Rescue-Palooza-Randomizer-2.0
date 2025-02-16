import React, { useEffect, useRef } from 'react';
import './Sidebar';
import { gsap } from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCharacterIndex } from './redux/characterIndex';
import { enableButton, disableAllButtons } from './redux/buttonstatus';
import { deactivateCharacter, incrementCount } from './redux/stageList';
import { playRandomAudio, characterSelectionClips, completionClips } from './AudioClips'

const PickCharacter = ({ handleShowImage, numberOfPlayers }) => {
  const dispatch = useDispatch();
  const stageListData = useSelector((state) => state.stageList.stageListData);
  const actualCharacterIndex = useSelector((state) => state.characterIndex.characterIndexCount);
  const characterIndexRef = useRef(actualCharacterIndex); // Initialize with the current value of the selector.
  const characterButtonStatus = useSelector((state) => state.buttonStatus.characterButton);
  const stageIndex = useSelector((state) => state.stageIndex.stageIndexCount);

  const numberOfStages = 17; // Define the number of stages globally
  const characterIndexThreshold = (numberOfStages * numberOfPlayers) + 13;
  // const actualCharacterIndexThreshold = characterIndexThreshold - 2;

  const activeCharacters = stageListData.flatMap((stage) =>
    stage.characters.filter((character) => character.isActive).map((character) => character.character)
  );

  useEffect(() => {
    characterIndexRef.current = actualCharacterIndex;
  }, [actualCharacterIndex]);

  const runMultipleTimes = (func) => {
    let remainingRuns = numberOfPlayers; // Number of times to run based on selected players.
    console.log(`Number of Players: ${numberOfPlayers}`);
    const runFunc = (characters) => {
      func(characters, (selectedCharacter) => {
        const filteredCharacters = characters.filter(
          (character) => character !== selectedCharacter.character
        );

        remainingRuns--;
        if (remainingRuns > 0) {
          setTimeout(() => runFunc(filteredCharacters), 1000); // Run again after 1 second.
        } else {
          setTimeout(() => {
            dispatch(enableButton({ buttonId: 'removeCharacterButton' }));

            if (stageIndex < 13) {
              dispatch(enableButton({ buttonId: 'stageButton' }));
            } else if (characterIndexRef.current < characterIndexThreshold) {
              dispatch(enableButton({ buttonId: 'characterButton' }));
            } else {
              console.log(`CharacterIndexRef.current: ${characterIndexRef.current}`);
              // Display the Cowabunga Logo or perform final action.
              playRandomAudio(completionClips);
              handleShowImage();
            }
          }, 1000);
        }
      });
    };

    runFunc(activeCharacters);
  };

  const handleRunMultipleTimes = () => {
    playRandomAudio(characterSelectionClips); // Play selection audio.
    runMultipleTimes((activeCharactersList, callback) => {
      handleCharacterSelection(activeCharactersList, callback);
    });
  };

  const handleCharacterSelection = (activeCharactersList, callback) => {
    console.log(activeCharactersList);
    console.log(characterIndexRef.current);
    const minTimer = 20;
    const maxTimer = 36;
    let headerCharacters = document.getElementById('headerCharacters');
    dispatch(disableAllButtons());
  
    function characterTimer(min, max) {
      let i = 0;
      let intervalHandle = setInterval(function () {
        headerCharacters.textContent = activeCharactersList[i++ % activeCharactersList.length];
      }, 60);
      var rand = Math.floor(Math.random() * (max - min + 1) + min);
      console.log(rand / 4 + ' seconds');
      setTimeout(function() {
        clearInterval(intervalHandle);
      }, 250 * rand);
      function displayCharacter() {
        setTimeout(() => {
          let characters = document.getElementById(characterIndexRef.current);
          characters.textContent = headerCharacters.textContent;
          const tl = gsap.timeline({ defaults: { ease: 'power0.out' } });
          tl.to(characters, { autoAlpha: '1', duration: 1 });
          tl.to(characters, { transform: 'translateX(0)', duration: 1 }, '-=1');
          const selectedCharacter = stageListData.flatMap(stage => stage.characters)
            .find(character => character.character === headerCharacters.textContent);
  
          if (selectedCharacter) {
            dispatch(incrementCount(selectedCharacter.character));
            dispatch(deactivateCharacter({ character: selectedCharacter.character, numberOfPlayers })); // Pass numberOfPlayers here
          }
  
          // Use dynamically calculated thresholds for characterIndexRef
          if (characterIndexRef.current < characterIndexThreshold) {
            dispatch(incrementCharacterIndex());
  
            // if (characterIndexRef.current > actualCharacterIndexThreshold) {
            //   console.log(`CharacterIndexRef.current: ${characterIndexRef.current}`);
            //   playRandomAudio(completionClips);
            //   handleShowImage();
            // }
          }
  
          if (typeof callback === 'function') {
            callback(selectedCharacter);
          }
        }, 250 * rand + 50);
      }
      displayCharacter();
    }
  
    characterTimer(minTimer, maxTimer);
  };  

  return (
    <div>
      <header>Character Picker</header>
      <h1 id="headerCharacters">?</h1>
      <button
        onClick={handleRunMultipleTimes}
        disabled={characterButtonStatus === 'disabled'}
        className="button"
        id="characterButton"
      >
        Start
      </button>
    </div>
  );
};

export default PickCharacter;
