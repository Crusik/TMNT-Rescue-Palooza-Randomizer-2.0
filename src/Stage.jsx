function Stage(props) {
  const { stageName, playerIds, stageIndex } = props;

  return (
    <div className="stage">
      {/* Display stage name or "Stage" */}
      <h2 id={stageIndex}>{stageName || `Stage ${stageIndex + 1}`}</h2>
      
      {/* Render players dynamically */}
      <ul>
        {playerIds.map((playerId, index) => (
          <li key={index}>
            <span id={playerId} className="character"></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stage;