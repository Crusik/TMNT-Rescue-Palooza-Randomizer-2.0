// import React, { useState, useEffect } from "react";
import './PickStage.css'

const StageButton = () => {
  // const [headerStages, setHeaderStages] = useState("");
  // const [intervalHandle, setIntervalHandle] = useState(null);
  // let x= 0;
  // const [stageList, setStageList] = useState([]);
  // const [selectedStages, setSelectedStages] = useState([]);
  // const [newStageList, setNewStageList] = useState([]);
  // const [characterList, setCharacterList] = useState([]);
  // const minTimer = 10;
  // const maxTimer = 20;
  
  // const stageTimer = (min, max) => {
  //   setIntervalHandle(
  //     setInterval(() => {
  //       setHeaderStages(stageList[x++ % stageList.length].stage);
  //     }, 60)
  //   );
  //   let rand = Math.floor(Math.random() * (max - min + 1) + min);
  //   console.log(`${rand / 2} seconds`);
  //   setTimeout(() => {
  //     clearInterval(intervalHandle);
  //   }, 500 * rand);

  //   const displayStage = () => {
  //     setTimeout(() => {
  //       let stage = document.getElementById(x);
  //       stage.textContent = headerStages;
  //       const removeStageFromSelection = () => {
  //         let selectedStage = [];
  //         const randomPick = headerStages;
  //         selectedStage.push(randomPick);
  //         for (let i = 0; i < stageList.length; i++) {
  //           if (stageList[i].stage === selectedStage[0]) {
  //             for (let j = 0; j < stageList[i].characters.length; j++) {
  //               characterList.push(stageList[i].characters[j]);
  //             }
  //             selectedStages.push(stageList[i]);
  //             newStageList.push(stageList[i]);
  //             console.log(`%c${JSON.stringify(newStageList)}`, "color: green");
  //             stageList.splice(i, 1);
  //           }
  //         }
  //       };
  //       if (x < 13) {
  //         x++;
  //       }
  //       removeStageFromSelection();
  //       // stageAndCharacterCheck();
  //     }, 500 * rand + 50);
  //   };
  //   displayStage();
  // };

  // useEffect(() => {
  //   if (x < 12) {
  //     stageTimer(minTimer, maxTimer);
  //   } else {
  //     stageTimer(1, 1);
  //   }
  // }, []);

  return <button className="button" id="stageButton" >Start</button>;
};

// const log = () => {
//   console.log(x);
// };

export default StageButton;
