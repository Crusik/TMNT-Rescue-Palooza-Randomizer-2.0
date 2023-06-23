import React from 'react';
import './Sidebar';

export let characterButton = document.getElementById('characterButton');

function PickCharacter(props){
    return (
        <>
            <header>Character Picker</header>
            <h1 id='headerCharacters'>?</h1>
            <button className="button" id="characterButton">Start</button>
        </>
    )
}

export default PickCharacter;