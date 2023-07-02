import React, { useRef } from 'react';
import './Sidebar';
import { randomStageSound } from './JSPlaceholder';
import { gsap } from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCharacterIndex } from './redux/characterIndex';
import { enableButton, disableBothButtons } from './redux/buttonstatus';
import { deactivateCharacter, incrementCount } from './redux/stageList';

const PickCharacter = () => {
  const dispatch = useDispatch();
  const stageListData = useSelector((state) => state.stageList.stageListData);
  const characterIndexRef = useRef(useSelector((state) => state.characterIndex.characterIndexCount));
  const characterIndex = useSelector((state) => state.characterIndex.characterIndexCount);
  const characterButtonStatus = useSelector((state) => state.buttonStatus.characterButton);
  const stageIndex = useSelector((state) => state.stageIndex.stageIndexCount);

  const activeCharacters = stageListData.flatMap((stage) =>
    stage.characters.filter((character) => character.isActive).map((character) => character.character)
  );

  const runTwice = (func) => {
    func();
    setTimeout(() => {
      func();
      setTimeout(() => {
        if(stageIndex < 13){
          dispatch(enableButton({ buttonId: 'stageButton' }));
          // This seems wrong, but it works because characterIndex is updated, but cannot be accessed until this function completes.
        } else if (characterIndex < 45) {
          dispatch(enableButton({ buttonId: 'characterButton' }));
        } else {
          // Run Cowabunga(). This might need to be changed to work properly.
        }
      }, 10000);
    }, 10000);
  };

  const handleRunTwice = () => {
    runTwice(handleCharacterSelection);
  };

  const handleCharacterSelection = () => {
    const characterIndex = characterIndexRef.current;
    console.log(characterIndex);
    const minTimer = 10;
    const maxTimer = 18;
    let headerCharacters = document.getElementById('headerCharacters');
    randomStageSound();
    dispatch(disableBothButtons());

    function characterTimer(min, max) {
      let i = 0;
      let intervalHandle = setInterval(function () {
        headerCharacters.textContent = activeCharacters[i++ % activeCharacters.length];
      }, 60);
      var rand = Math.floor(Math.random() * (max - min + 1) + min);
      console.log(rand / 2 + ' seconds');
      setTimeout(function () {
        clearInterval(intervalHandle);
      }, 500 * rand);
      function displayCharacter() {
        setTimeout(() => {
          let characters = document.getElementById(characterIndex);
          characters.textContent = headerCharacters.textContent;
          const tl = gsap.timeline({ defaults: { ease: 'power0.out' } });
          tl.to(characters, { autoAlpha: '1', duration: 1 });
          tl.to(characters, { transform: 'translateX(0)', duration: 1 }, '-=1');
          const selectedCharacter = stageListData.flatMap(stage => stage.characters)
          .find(character => character.character === headerCharacters.textContent);

        if (selectedCharacter) {
          // Dispatch an action to increment the count of the selected character
          dispatch(incrementCount(selectedCharacter.character));
          // Dispatch an action to deactivate the character
          dispatch(deactivateCharacter(selectedCharacter.character));
        if (characterIndex < 47) {
          dispatch(incrementCharacterIndex());
          // The following is to add to a reference of characterIndex that is local to this function. Since this function is ran twice in a row, the characterIndex is updated, but
          // the function cannot access it while the runTwice() function is still running on the second func() call.
          characterIndexRef.current += 1;
          }
        }
      }, 500 * rand + 50);
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
