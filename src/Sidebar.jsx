import React from 'react';
import './Sidebar.css';
import PickCharacter from './PickCharacter';
import PickStage from './PickStage';
import RemoveStage from './RemoveStage';
import RemoveCharacter from './RemoveCharacter';
import { useDispatch, useSelector } from 'react-redux';


const Sidebar = (props) => {
    // const { stageListValue } = useSelector(state => state.stageList);
    // const dispatch = useDispatch();

    const { handleStageSelection } = props;
    const { disableStageButton } = props;
    const { x } = props;
    const { setX } = props;
    const { y } = props;
    const { setY } = props;

    return (
        <div className='sidebar'>
            <PickStage y={y} setY={setY} handleStageSelection={handleStageSelection} disableStageButton={disableStageButton}/>
            <PickCharacter y={y} setY={setY} x={x} setX={setX}/>
            <RemoveStage />
            <RemoveCharacter />
        </div>
    );
}

export default Sidebar;