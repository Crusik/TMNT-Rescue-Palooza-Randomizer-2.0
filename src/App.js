// import { useState } from 'react';
import './App.scss';
import Sidebar from './Sidebar';
import Stages from './Stages';
import cowabunga from './Images/cowabunga.png'
import { useState } from 'react';

const App = () => {

  const [showImage, setShowImage] = useState(false);

  const handleShowImage = () => {
    setShowImage(true);
  };

  const handleHideImage = () => {
    setShowImage(false);
  };

  return (
      <div className='app'>
          <Sidebar handleShowImage={handleShowImage} />
          <Stages />
          <div className="image-container">
            {showImage && <img src={cowabunga} alt="Cowabunga" className="cowabunga" onClick={handleHideImage} />}
          </div>
      </div>
    );
}

export default App;
