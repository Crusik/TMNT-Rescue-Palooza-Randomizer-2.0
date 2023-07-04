import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { gsap } from 'gsap';
import { activateStage } from './redux/stageList';
import { decrementStageIndex } from './redux/stageIndex';
import { enableButton, disableAllButtons  } from './redux/buttonstatus';

const RemoveStage = () => {

  const removeStageButtonStatus = useSelector((state) => state.buttonStatus.removeStageButton);
  const stageListData = useSelector((state) => state.stageList.stageListData);
  const stageIndex = useSelector((state) => state.stageIndex.stageIndexCount);
  const dispatch = useDispatch();

  const removeLastStage = () => {
    dispatch(disableAllButtons())
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
      dispatch(decrementStageIndex());
      dispatch(enableButton({ buttonId: "stageButton" }))
      dispatch(enableButton({ buttonId: "removeCharacterButton" }))
    }, 9000);
  };
  return (
    <>
      <header>Remove Last Stage</header>
      <button onClick={removeLastStage} disabled={removeStageButtonStatus === "disabled"} className="button" id="removeStageButton">
        Remove
      </button>
    </>
  );
}

export default RemoveStage;
