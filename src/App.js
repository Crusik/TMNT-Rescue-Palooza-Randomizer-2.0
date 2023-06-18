import { useState } from 'react';
import './App.scss';
import Sidebar from './Sidebar';
import Stages from './Stages';
// import {BrowserRouter as Router, Routes} from "react-router-dom";

function App() {

  const [characterList, setCharacterList] = useState([
    {
      id: 1,
      character: "Don",
      isActive: true,
    },
    {
      id: 2,
      character: "Leo",
      isActive: true,
    },
    {
      id: 3,
      character: "Mikey",
      isActive: true,
    },
    {
      id: 4,
      character: "Raph",
      isActive: true,
    },
  ])

  

  return (
      <div className='app'>
          <Sidebar />
          <Stages  />
      </div>
    );
}

export default App;
