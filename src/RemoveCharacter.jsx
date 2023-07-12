import React, { useEffect, useRef } from 'react';
import './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { enableButton, disableAllButtons  } from './redux/buttonstatus';
import { decrementCharacterIndex } from './redux/characterIndex';
import { activateCharacter, decrementCharacterCount } from './redux/stageList';
import { playRandomAudio, removeCharacterClips } from './AudioClips'

const RemoveCharacter = () => {

    const stageListData = useSelector((state) => state.stageList.stageListData);
    const removeCharacterButtonStatus = useSelector((state) => state.buttonStatus.removeCharacterButton);
    const actualCharacterIndex = useSelector((state) => state.characterIndex.characterIndexCount);
    const characterIndexRef = useRef(useSelector((state) => state.characterIndex.characterIndexCount));
    const stageIndex = useSelector((state) => state.stageIndex.stageIndexCount);
    const dispatch = useDispatch();

    useEffect(() => {
        characterIndexRef.current = actualCharacterIndex;
      }, [actualCharacterIndex]);

    const handleRemoveCharacter = () => {
        playRandomAudio(removeCharacterClips)
        let lastCharacter = document.getElementById(actualCharacterIndex - 1);
        const removedCharacter = stageListData.flatMap(stage => stage.characters)
            .find(character => character.character === lastCharacter.textContent)
        console.log(characterIndexRef.current)
        console.log(actualCharacterIndex)
    dispatch(disableAllButtons());
    // tl.to(lastCharacter, { transform: "translateX(-100%)", duration: 1 });
    // tl.to(lastCharacter, { autoAlpha: "0", duration: 1 }, "-=1");
    dispatch(decrementCharacterCount(removedCharacter.character));
    dispatch(activateCharacter(removedCharacter.character));
    // Pause for effect
    setTimeout(function() {
        lastCharacter.innerHTML = '';
        dispatch(decrementCharacterIndex());
        if (actualCharacterIndex % 2 === 1) {
            dispatch(enableButton({ buttonId: "removeCharacterButton" }))
        } else if (actualCharacterIndex > 40) {
            if (actualCharacterIndex % 2 === 0) {
                dispatch(enableButton({ buttonId: "characterButton" }))
                dispatch(enableButton({ buttonId: "removeCharacterButton" }))
            }
        } else if (stageIndex > 0) {
            dispatch(enableButton({ buttonId: "characterButton" }))
            dispatch(enableButton({ buttonId: "removeStageButton" }))
        } else {
            dispatch(enableButton({ buttonId: "characterButton" }))
        }
    }, 7000);
    }

    return (
        <>
            <header>Remove Last Character</header>
            <button className="button" onClick={handleRemoveCharacter} disabled={removeCharacterButtonStatus === "disabled"} id="removeCharacterButton">Remove</button>
        </>
    )
}

export default RemoveCharacter;