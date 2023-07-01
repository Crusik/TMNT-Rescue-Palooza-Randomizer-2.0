import './PickStage.css'
import { stageList, i, disableButtons, randomStageSound, characterList, stageAndCharacterCheck, selectedStages, newStageList, maxTimer, minTimer } from './JSPlaceholder'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { isActive } from './actions';
// import { inactive, stageListData, activeStages, active } from './redux/stageList';
// import { deactivateStage } from './stageList';
import { increment } from './redux/stageIndex';
import { activateCharacter, deactivateStage } from './redux/stageList';

// export let stageButton = document.getElementById('stageButton');
let x = 0;

const PickStage = (props) => {
    const stageListData = useSelector((state) => state.stageList.stageListData);
    // const stageIndexCount = useSelector((state) => state.stageIndex);
    const dispatch = useDispatch();
    
    // const deactivateStage = (stageId) => {
        //     dispatch(deactivateStage({ stageId }));
        // };
        // const { handleStageSelection } = props;
        // const {disableStageButton} = props;
        
        // const runInitialButtonCheck = () => {
            //     disableStageButton();
            // }
            const activeStages = stageListData
            .filter(stage => stage.isActive)
            .map(stage => stage.stage);
            
            
            
            
    const handleStageSelection = () => {
        console.log(activeStages)
        let headerStages = document.getElementById('headerStages');
        console.log(x)
        const minTimer = 10;
        const maxTimer = 20;
        disableButtons();
        randomStageSound();
        // Timer for the random picker. The timer will be random within a set range "min-max"
        // Thought about changing the two function timers into the same one, but feel there are too many different elements in the two.
        function stageTimer(min, max) {
            let i = 0;
            let intervalHandle = setInterval(function() {
                headerStages.textContent = activeStages[i++ % activeStages.length];
            }, 60);
            var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between min - max
            console.log(rand / 2 + ' seconds');
            setTimeout(function() {
                clearInterval(intervalHandle);
            }, 500 * rand);

            function displayStage() {
                setTimeout(() => {
                    // Each Stage/Character combo Div has 1 Stage div per parent Div. Index + 1 for each time this is ran. This will move stage picker the next stage selection
                    let stage = document.getElementById(x)
                    stage.textContent = headerStages.textContent; // Whatever selected will display on the right side of the App in the proper section
                    function removeStageFromSelection() {
                        let selectedStage = [];
                        // const randomStage = document.querySelector("#headerStages");
                        const randomPick = headerStages.textContent;
                        selectedStage.push(randomPick);
                        console.log(activeStages)
                        console.log(selectedStage)
                        // This will iterate through the stageList object, then compare whatever the "randomPick" is with the Object. For the Object stage:("value") that is equal, then
                        // it will iterate through the array that is within the array of Ojects and then push "this" ("characters") onto the "characterList" for the available characters.
                        for (let i = 0; i < stageListData.length; i++) {
                            if (stageListData[i].stage === selectedStage[0]) {
                            dispatch(deactivateStage({ stageId: i }));
                            // dispatch(activateCharacter({ stageId: i }));
                            //   break;
                            }
                                // for (let j = 0; j < activeStages[i]["characters"].length; j++) {
                                //     characterList.push(activeStages[i]["characters"][j]);
                                // }
                                // selectedStages.push(activeStages[i]);
                            // newStageList.push(activeStages[i]);
                            // console.log(`%c${JSON.stringify(newStageList)}`, "color: green")
                                // activeStages.splice(i, 1);
                        }
                    }
                    if (x < 13) {
                        x++;
                    }
                    removeStageFromSelection();
                    // stageAndCharacterCheck()
                }, 500 * rand + 50);
            }
            displayStage();
        }
        if (x < 12) {
            stageTimer(minTimer, maxTimer)
        } else {
            stageTimer(1, 1)
        }
    };

    return (
    <>
      <header>Stage Picker</header>
      <h1 id='headerStages'>?</h1>
      {/* <h1>Swamp stage is active: {stageListData[1].isActive.toString()}</h1> */}
      {/* <button onClick={() => dispatch(inactive())} className="button" id="stageButton" >Start</button> */}
      <button onClick={handleStageSelection} className="button" id="stageButton" >Start</button>
    </>
  )
};
export default PickStage;
