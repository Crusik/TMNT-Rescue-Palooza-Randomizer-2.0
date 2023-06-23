import './PickStage.css'
import { x, stageList, i, disableButtons, randomStageSound, characterList, stageAndCharacterCheck, selectedStages, newStageList, maxTimer, minTimer } from './JSPlaceholder'
import { useEffect } from 'react';

// export let stageButton = document.getElementById('stageButton');

const PickStage = (props) => {
    
    let headerStages = document.getElementById('headerStages');
    // const { handleStageSelection } = props;
    const {disableStageButton} = props;
    
    const runInitialButtonCheck = () => {
        disableStageButton();
    }
    useEffect(() => {
        runInitialButtonCheck()
    });
  // const handleClick = () => {
  //   console.log("Yes")
  //   handleStageSelection();
  // }
//   disableStageButton();
  const handleStageSelection = () => {
    disableButtons();
    randomStageSound();
    // Timer for the random picker. The timer will be random within a set range "min-max"
    // Thought about changing the two function timers into the same one, but feel there are too many different elements in the two.
    function stageTimer(min, max) {
        let intervalHandle = setInterval(function() {
            headerStages.textContent = stageList[i++ % stageList.length]["stage"];
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
                    const randomStage = document.querySelector("#headerStages");
                    const randomPick = randomStage.textContent;
                    selectedStage.push(randomPick);
                    // This will iterate through the stageList object, then compare whatever the "randomPick" is with the Object. For the Object stage:("value") that is equal, then
                    // it will iterate through the array that is within the array of Ojects and then push "this" ("characters") onto the "characterList" for the available characters.
                    for (let i = 0; i < stageList.length; i++) {
                        if (stageList[i]["stage"] === selectedStage[0]) {
                            for (let j = 0; j < stageList[i]["characters"].length; j++) {
                                characterList.push(stageList[i]["characters"][j]);
                            }
                            selectedStages.push(stageList[i]);
                            newStageList.push(stageList[i]);
                            console.log(`%c${JSON.stringify(newStageList)}`, "color: green")
                            stageList.splice(i, 1);
                        }
                    }
                }
                if (x < 13) {
                    x++;
                }
                removeStageFromSelection();
                stageAndCharacterCheck()
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
      <button onClick={handleStageSelection} className="button" id="stageButton" >Start</button>
    </>
  )
};
export default PickStage;
