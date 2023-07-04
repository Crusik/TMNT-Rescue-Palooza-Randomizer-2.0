import React from 'react';
import './Sidebar.css';
import PickCharacter from './PickCharacter';
import PickStage from './PickStage';
import RemoveStage from './RemoveStage';
import RemoveCharacter from './RemoveCharacter';
import { useSelector } from 'react-redux';


const Sidebar = () => {
    const stageListData = useSelector((state) => state.stageList.stageListData);

    const activeStages = stageListData
    .filter(stage => stage.isActive)
    .map(stage => stage.stage);

    const activeCharacters = stageListData.flatMap((stage) =>
    stage.characters.filter((character) => character.isActive).map((character) => character.character)
  );
    return (
        <div className='sidebar'>
            <PickStage activeStages={activeStages} /> 
            <PickCharacter />
            <RemoveStage activeStages={activeStages} />
            <RemoveCharacter />
        </div>
    );
}

export default Sidebar;