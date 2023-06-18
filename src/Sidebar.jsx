import React from 'react';
import HeaderStages from './HeaderStages';
import HeaderCharacters from './HeaderCharacters';
import './Sidebar.css';
import PickCharacter from './PickCharacter';
import PickStage from './PickStage';
import RemoveStage from './RemoveStage';
import RemoveCharacter from './RemoveCharacter';

function Sidebar(){
    return (
        <div className='sidebar'>
            <header>
                Stage Picker
            </header>
            <HeaderStages />
            <PickStage />
            <header>
                Character Picker
            </header>
            <HeaderCharacters />
            <PickCharacter />
            <RemoveStage />
            <RemoveCharacter />
        </div>
    );
}

export default Sidebar;