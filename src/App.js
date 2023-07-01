// import { useState } from 'react';
import './App.scss';
import Sidebar from './Sidebar';
import Stages from './Stages';
// import { useSelector } from 'react-redux';
// import stageList from './StageList';
// import { handleStageSelection } from './JSPlaceholder';

// import {BrowserRouter as Router, Routes} from "react-router-dom";

const App = () => {

  return (
      <div className='app'>
          <Sidebar/>
          <Stages/>
      </div>
    );
}

export default App;
