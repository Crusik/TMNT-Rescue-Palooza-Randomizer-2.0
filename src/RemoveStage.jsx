import React from 'react';
import './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { activateStage } from './redux/stageList';
// import { activateStage } from './stageListSlice';

function RemoveStage(){

    const stageListData = useSelector((state) => state.stageList.stageListData);

    const activateStage = (stageId) => {
        dispatch(activateStage({ stageId }));
    };

    const dispatch = useDispatch();

    return (
        <>
            <header>Remove Last Stage</header>
            <button onClick={() => dispatch(activateStage())} className="button" id="removeStageButton">Remove</button>
        </>
    )
}

export default RemoveStage;