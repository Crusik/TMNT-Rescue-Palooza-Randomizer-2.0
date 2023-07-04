import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { gsap } from 'gsap';
import { activateStage } from './redux/stageList';
import { decrement } from './redux/stageIndex';

function RemoveStage({ activeStages }) {

  const stageListData = useSelector((state) => state.stageList.stageListData);
  const stageIndex = useSelector((state) => state.stageIndex.stageIndexCount);
  const dispatch = useDispatch();

  const removeLastStage = () => {
    const lastStage = document.getElementById(stageIndex - 1);
    for (var i = 0; i < stageListData.length; i++) {
      // Checks to see what the last stage selected is
      if (lastStage.innerHTML === stageListData[i].stage) {
          dispatch(activateStage({ stageId: i }))
      }
    }
    setTimeout(function() {
      // Change the Stage that is removed back to "Stage" default. Then go back a StageIndex
      lastStage.innerHTML = 'Stage';
      dispatch(decrement());
    }, 4000);
  };
  return (
    <>
      <header>Remove Last Stage</header>
      <button onClick={removeLastStage} className="button" id="removeStageButton">
        Remove
      </button>
    </>
  );
}

export default RemoveStage;
