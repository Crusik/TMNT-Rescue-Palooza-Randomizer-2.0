import React from 'react';
import './Stages.scss';
import Stage from './Stage';
import CharacterSprites from './CharacterSprites';

function Stages({ numberOfPlayers }) {
  // Helper function to generate player IDs dynamically
  const getPlayerIds = (startId, count) =>
    Array.from({ length: count }, (_, i) => startId + i);

  // Variable to track the starting player ID
  let currentPlayerId = 13;

  return (
    <div className="stages-container">
      <div className="stages-grid">
        {/* Render each stage */}
        {Array.from({ length: 13 }).map((_, index) => {
          const playerIds = getPlayerIds(currentPlayerId, numberOfPlayers);
          currentPlayerId += numberOfPlayers; // Increment the starting ID for the next stage

          return (
            <Stage
              key={index}
              stageIndex={index}
              playerIds={playerIds} // Pass the entire array of player IDs
            />
          );
        })}

        {/* Render final stages (manually specified) */}
        {['Krang', 'Techno-Drome', 'Techno-Drome', 'Techno-Drome'].map((stageName, idx) => {
          const playerIds = getPlayerIds(currentPlayerId, numberOfPlayers);
          currentPlayerId += numberOfPlayers;

          return (
            <Stage
              key={`final-${idx}`}
              stageName={stageName}
              playerIds={playerIds} // Pass the entire array of player IDs
            />
          );
        })}
      </div>

      <div className="sprites">
        <CharacterSprites />
      </div>
    </div>
  );
}

export default Stages;