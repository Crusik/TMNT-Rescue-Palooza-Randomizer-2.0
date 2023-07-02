import React, { useRef } from 'react';
import './Sidebar';
import { randomStageSound, disableButtons, stageAndCharacterCheck } from './JSPlaceholder';
import { gsap } from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCharacterIndex } from './redux/characterIndex';
import { enableButton, disableButton, disableBothButtons } from './redux/buttonstatus';

const PickCharacter = (props) => {
  const dispatch = useDispatch();
  const stageListData = useSelector((state) => state.stageList.stageListData);
  const characterIndexRef = useRef(useSelector((state) => state.characterIndex.characterIndexCount));
  const characterButtonStatus = useSelector((state) => state.buttonStatus.characterButton);

  const activeCharacters = stageListData.flatMap((stage) =>
    stage.characters.filter((character) => character.isActive).map((character) => character.character)
  );

  const runTwice = (func) => {
    func();
    setTimeout(() => {
      func();
      setTimeout(() => {
        dispatch(enableButton({ buttonId: 'stageButton' }));
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
    const maxTimer = 20;
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
          if (characterIndex < 47) {
            dispatch(incrementCharacterIndex());
            characterIndexRef.current = characterIndex + 1;
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
