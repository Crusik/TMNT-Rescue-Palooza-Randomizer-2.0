import React from 'react';
import './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { active } from './redux/stageList';

function RemoveStage(){

    const { stageListValue } = useSelector((state) => state.stageList);
    const dispatch = useDispatch();

    return (
        <>
            <header>Remove Last Stage</header>
            <button onClick={() => dispatch(active())} className="button" id="removeStageButton">Remove</button>
        </>
    )
}

export default RemoveStage;