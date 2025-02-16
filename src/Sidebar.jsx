import React from 'react';
import PickCharacter from './PickCharacter';
import PickStage from './PickStage';
import RemoveStage from './RemoveStage';
import RemoveCharacter from './RemoveCharacter';

// I want to Add selector for Normal and "Arcade" modes. For Arcade mode, all of the characters will be unlocked. Even the extra characters.

const Sidebar = ({ handleShowImage, numberOfPlayers }) => {
    return (
        <div className='sidebar'>
            <PickStage /> 
            <PickCharacter handleShowImage={handleShowImage} numberOfPlayers={numberOfPlayers}/>
            <RemoveStage />
            <RemoveCharacter />
        </div>
    );
}

export default Sidebar;