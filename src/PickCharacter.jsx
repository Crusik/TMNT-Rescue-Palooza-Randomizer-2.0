import React, { useEffect, useRef } from 'react';
import './Sidebar';
import { gsap } from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCharacterIndex } from './redux/characterIndex';
import { enableButton, disableAllButtons } from './redux/buttonstatus';
import { deactivateCharacter, incrementCount } from './redux/stageList';
import { playRandomAudio, characterSelectionClips, completionClips } from './AudioClips'

const PickCharacter = ({ handleShowImage }) => {
  const dispatch = useDispatch();
  const stageListData = useSelector((state) => state.stageList.stageListData);
  const characterIndexRef = useRef(useSelector((state) => state.characterIndex.characterIndexCount));
  const actualCharacterIndex = useSelector((state) => state.characterIndex.characterIndexCount);
  const characterButtonStatus = useSelector((state) => state.buttonStatus.characterButton);
  const stageIndex = useSelector((state) => state.stageIndex.stageIndexCount);

  const activeCharacters = stageListData.flatMap((stage) =>
    stage.characters.filter((character) => character.isActive).map((character) => character.character)
  );

  useEffect(() => {
    characterIndexRef.current = actualCharacterIndex;
  }, [actualCharacterIndex]);

  const runTwice = (func) => {
    func(activeCharacters, (selectedCharacter) => {  
      console.log(selectedCharacter.character)
      setTimeout(() => {
        const filteredCharacters = activeCharacters.filter(character => character !== selectedCharacter.character);
        // console.log(filteredCharacters)
        func(filteredCharacters, selectedCharacter);
        setTimeout(() => {
          dispatch(enableButton({ buttonId: 'removeCharacterButton' }));
          // This seems wrong, but it works because characterIndex is updated, but cannot be accessed until this function completes.
          if (stageIndex < 13) {
            dispatch(enableButton({ buttonId: 'stageButton' }));
          } else if (actualCharacterIndex < 45){
            dispatch(enableButton({ buttonId: 'characterButton' }));
          } else {
            // Run Cowabunga(). This might need to be changed to work properly.
          }
        }, 10000);
      }, 1000);
    });
  };

  const handleRunTwice = () => {
    // Play Music
    playRandomAudio(characterSelectionClips);
    runTwice((activeCharactersList, callback) => {
      handleCharacterSelection(activeCharactersList, callback);
    });
  };

  const handleCharacterSelection = (activeCharactersList, callback) => {
    console.log(activeCharactersList)
    // console.log(characterIndex);
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
              dispatch(deactivateCharacter(selectedCharacter.character));
            }
            if (actualCharacterIndex < 47) {
              dispatch(incrementCharacterIndex());
              console.log(characterIndexRef.current)
              // The following is to add to a reference of characterIndex that is local to this function. Since this function is ran twice in a row, the characterIndex is updated, but
              // the function cannot access it while the runTwice() function is still running on the second func() call.
              // characterIndexRef.current += 1;
              if (characterIndexRef.current > 45) {
                console.log(actualCharacterIndex)
                playRandomAudio(completionClips);
                handleShowImage();
                // Just need to display the Cowabunga Logo
              }
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
    <>
      <header>Character Picker</header>
      <h1 id="headerCharacters">?</h1>
      <button
        onClick={handleRunTwice}
        disabled={characterButtonStatus === 'disabled'}
        className="button"
        id="characterButton"
      >
        Start
      </button>
    </>
  );
};

export default PickCharacter;
