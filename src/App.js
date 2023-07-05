// import { useState } from 'react';
import './App.scss';
import Sidebar from './Sidebar';
import Stages from './Stages';

const App = () => {

  return (
      <div className='app'>
          <Sidebar/>
          <Stages/>
      </div>
    );
}

export default App;
