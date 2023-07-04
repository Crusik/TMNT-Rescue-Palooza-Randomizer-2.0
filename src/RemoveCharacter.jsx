import React, { useEffect, useRef } from 'react';
import './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { enableButton, disableAllButtons  } from './redux/buttonstatus';
import { decrementCharacterIndex } from './redux/characterIndex';

const RemoveCharacter = () => {

    const removeCharacterButtonStatus = useSelector((state) => state.buttonStatus.removeCharacterButton);
    const actualCharacterIndex = useSelector((state) => state.characterIndex.characterIndexCount);
    const characterIndexRef = useRef(useSelector((state) => state.characterIndex.characterIndexCount));
    // const characterIndex = characterIndexRef.current;
    const stageIndex = useSelector((state) => state.stageIndex.stageIndexCount);
    const dispatch = useDispatch();

    useEffect(() => {
        characterIndexRef.current = actualCharacterIndex;
      }, [actualCharacterIndex]);
    
    // Need to make sure to take away a count to each character that was removed.
    
    const handleRemoveCharacter = () => {
        let lastCharacter = document.getElementById(actualCharacterIndex - 1);
        console.log(characterIndexRef.current)
        console.log(actualCharacterIndex)
    // randomRemovalSound();
    dispatch(disableAllButtons());
    // tl.to(lastCharacter, { transform: "translateX(-100%)", duration: 1 });
    // tl.to(lastCharacter, { autoAlpha: "0", duration: 1 }, "-=1");
    setTimeout(function() {
        lastCharacter.innerHTML = '';
        // characterIndexRef.current -= 1;
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
        // stageAndCharacterCheck();
        // characterButton.disabled = false;
        // enableRemoveButtons(removeStageButton, removeCharacterButton);
    }, 4000);
    }

    return (
        <>
            <header>Remove Last Character</header>
            <button className="button" onClick={handleRemoveCharacter} disabled={removeCharacterButtonStatus === "disabled"} id="removeCharacterButton">Remove</button>
        </>
    )
}

export default RemoveCharacter;