import React from 'react';
import './TitleScreen.css';

function TitleScreen({ onPlayerSelect }) {
  return (
    <div className="title-screen-overlay">
      <h1 className='title-header'>Teenage Mutant Ninja Turtles</h1>
      <h2 className='title-subheader'>Rescue-palooza Randomizer</h2>
      <h3 className='title-player-select'>Select Number of Players</h3>
      <div className="button-container">
        <button onClick={() => onPlayerSelect(2)}>2 Players</button>
        <button onClick={() => onPlayerSelect(3)}>3 Players</button>
        <button onClick={() => onPlayerSelect(4)}>4 Players</button>
      </div>
    </div>
  );
}

export default TitleScreen;
