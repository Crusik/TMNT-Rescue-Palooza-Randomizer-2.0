import React from 'react';
import './Sidebar';

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