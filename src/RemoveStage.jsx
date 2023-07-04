import React from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';

function RemoveStage({ activeStages }) {

  const stageIndex = useSelector((state) => state.stageIndex.stageIndexCount);

  // const removeLastStage = () => {
  //   const lastStage = document.getElementById(stageIndex - 1).textContent;
  //   const tl = gsap.timeline({ defaults: { ease: 'power0.out' } });
  //   tl.to(lastStage, { transform: "translateX(-100%)", duration: 1 });
  //   tl.to(lastStage, { autoAlpha: "0", duration: 1 }, "-=1");
  //   for (var i = 0; i < activ.length; i++) {
  //                 // Checks to see what the last stage selected is
  //                 if (lastStage.innerHTML === selectedStages[i]['stage']) {
  //                     // Adds the removed stage back to the stage list array
  //                     stageList.push(selectedStages[i]);
  //                     // The last group of characters that was added to the "pool".
  //                     // These will be removed when the corresponding stage is removed
  //                     let lastCharacters = selectedStages[i]['characters'];
  //                         // I believe this is removing the characters that correspond to the stage that is removed
  //                     characterList = characterList.filter(characters => !lastCharacters.includes(characters))
  //                         // Removes the last stage on both of these
  //                     newStageList.pop();
  //                     selectedStages.pop();
  //                 }
  //             }
  //             console.log(characterList);
  //             console.log(newStageList)
  //             // Change the Stage that is removed back to "Stage" default
  //             setTimeout(function() {
  //             lastStage.innerHTML = 'Stage';
      
  //             if (stageIndex > 0) {
  //               stageIndex--;
  //                 console.log(stageIndex)
  //             }
  //             // enableRemoveButtons(removeStageButton, removeCharacterButton);
  //             stageAndCharacterCheck()
  //             // removeButtonsCheck();
  //             // Need to make a check for the stage/character button on removal. Or adjust the other check.
  //             // stageButton.disabled = false;
  //         }, 4000);
  // };

  return (
    <>
      <header>Remove Last Stage</header>
      <button className="button" id="removeStageButton">
      {/* <button onClick={removeLastStage} className="button" id="removeStageButton"> */}
        Remove
      </button>
    </>
  );
}

export default RemoveStage;
