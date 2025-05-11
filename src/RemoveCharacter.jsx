import React, { useEffect, useRef } from 'react';
import './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { enableButton, disableAllButtons } from './redux/buttonstatus';
import { decrementCharacterIndex } from './redux/characterIndex';
import { activateCharacter, decrementCharacterCount } from './redux/stageList';
import { playRandomAudio, removeCharacterClips } from './AudioClips';

const RemoveCharacter = ({ numberOfPlayers }) => {
  const dispatch = useDispatch();
  const stageListData = useSelector((state) => state.stageList.stageListData);
  const actualCharacterIndex = useSelector((state) => state.characterIndex.characterIndexCount);
  const characterIndexRef = useRef(actualCharacterIndex);
  const stageIndex = useSelector((state) => state.stageIndex.stageIndexCount);
  const removeCharacterButtonStatus = useSelector((state) => state.buttonStatus.removeCharacterButton);

  useEffect(() => {
    characterIndexRef.current = actualCharacterIndex;
  }, [actualCharacterIndex]);

  const removeOneCharacter = () => {
    const index = characterIndexRef.current - 1;
    const characterElement = document.getElementById(index);
    if (!characterElement) return;

    const removedCharacter = stageListData.flatMap(stage => stage.characters)
      .find(character => character.character === characterElement.textContent);

    if (removedCharacter) {
      dispatch(decrementCharacterCount(removedCharacter.character));
      dispatch(activateCharacter(removedCharacter.character));
    }

    // Clear UI characters
    characterElement.textContent = '';

    dispatch(decrementCharacterIndex());
    characterIndexRef.current -= 1;
  };

  const runMultipleRemovals = () => {
    playRandomAudio(removeCharacterClips);
    dispatch(disableAllButtons());

    let remainingRuns = numberOfPlayers;

    const run = () => {
      removeOneCharacter();
      remainingRuns--;

      if (remainingRuns > 0) {
        setTimeout(run, 1000);
      } else {
        // Final delay to simulate effect
        setTimeout(() => {
          // Always enable characterButton after removing "numberOfPlayers"
          dispatch(enableButton({ buttonId: "characterButton" }));

          // Enable removeStageButton if stageIndex > 0
          if (stageIndex > 0) {
              dispatch(enableButton({ buttonId: "removeStageButton" }));
          }
        }, 1000);
      }
    };

    run();
  };

  return (
    <div>
      <header>Remove Last Character</header>
      <button
        className="button"
        onClick={runMultipleRemovals}
        disabled={removeCharacterButtonStatus === "disabled"}
        id="removeCharacterButton"
      >
        Remove
      </button>
    </div>
  );
};

export default RemoveCharacter;