import React from 'react';
import './Sidebar.css';
import PickCharacter from './PickCharacter';
import PickStage from './PickStage';
import RemoveStage from './RemoveStage';
import RemoveCharacter from './RemoveCharacter';



const Sidebar = ({ handleShowImage }) => {
    return (
        <div className='sidebar'>
            <PickStage /> 
            <PickCharacter handleShowImage={handleShowImage} />
            <RemoveStage />
            <RemoveCharacter />
        </div>
    );
}

export default Sidebar;