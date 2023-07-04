import React from 'react';
import './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { enableButton, disableAllButtons  } from './redux/buttonstatus';

function RemoveCharacter(){

    const removeCharacterButtonStatus = useSelector((state) => state.buttonStatus.removeCharacterButton);
    const dispatch = useDispatch();

    return (
        <>
            <header>Remove Last Character</header>
            <button className="button" disabled={removeCharacterButtonStatus === "disabled"} id="removeCharacterButton">Remove</button>
        </>
    )
}

export default RemoveCharacter;