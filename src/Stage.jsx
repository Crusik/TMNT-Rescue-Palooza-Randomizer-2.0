import React from 'react';
import './Stage.css';

function Stage(props) {
  const { stageName, player1Id, player2Id, stageId } = props;

  return (
    <div className="stage">
      <h2 id={stageId}>{stageName || 'Stage'}</h2>
      <ul>
        <li><span id={player1Id} className="character"></span></li>
        <li><span id={player2Id} className="character"></span></li>
      </ul>
    </div>
  );
}

export default Stage;