import { useState } from 'react';
import './App.scss';
import Sidebar from './Sidebar';
import Stages from './Stages';
// import stageList from './StageList';
// import { handleStageSelection } from './JSPlaceholder';

// import {BrowserRouter as Router, Routes} from "react-router-dom";

const App = () => {
  // This function will need to be ran after the 2nd players character is selected to check if the character has been selected 3 or more times.
  // function pickedThreeTimes(){
  //   if(characterList.count >= 3) {
  //     characterList.isActive = false;
  //   }
  // }

  // const []
  const [x, setX] = useState(0); // Assuming x is a state value
  const [y, setY] = useState(13); // Assuming y is a state value

  const disableStageButton = () => {
    if (y < 15) {
      document.getElementById('stageButton').disabled = true;
      removeButtonsCheck();
    }
  };

  const removeButtonsCheck = () => {
    const removeCharacterButton = document.getElementById('removeCharacterButton');
    const removeStageButton = document.getElementById('removeStageButton');

    if (y === 13 || (y - 13) / 2 === x) {
      removeCharacterButton.disabled = true;
      if (x === 0 || (y - 13) / 2 !== x) {
        removeStageButton.disabled = true;
      } else {
        return;
      }
    } else if (x === 0 || (y - 13) / 2 !== x) {
      removeStageButton.disabled = true;
    } else {
      removeCharacterButton.disabled = false;
      removeStageButton.disabled = false;
    }
  };

  const [characterList, setCharacterList] = useState([
    {
      id: 1,
      character: "Don",
      isActive: true,
      count: 0
    },
    {
      id: 2,
      character: "Leo",
      isActive: true,
      count: 0
    },
    {
      id: 3,
      character: "Mikey",
      isActive: true,
      count: 0
    },
    {
      id: 4,
      character: "Raph",
      isActive: true,
      count: 0
      
    },
  ])
  // This doesn't work as needed. Need 
  // const handleStageSelection = () => {
  //   console.log("yesssss")
  // }

  

  return (
      <div className='app'>
          <Sidebar characterList={characterList} setCharacterList={setCharacterList} disableStageButton={disableStageButton}/>
          {/* <Sidebar handleStageSelection={handleStageSelection} characterList={characterList} setCharacterList={setCharacterList} />
          <Stages  handleStageSelection={handleStageSelection} characterList={characterList} setCharacterList={setCharacterList} /> */}
          <Stages characterList={characterList} setCharacterList={setCharacterList} />
      </div>
    );
}

export default App;
