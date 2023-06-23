import './PickStage.css'

const PickStage = (props) => {

  const { handleStageSelection } = props;

  const handleClick = () => {
    console.log("Yes")
    handleStageSelection();
  }

  return (
    <>
      <header>Stage Picker</header>
      <h1 id='headerStages'>?</h1>
      <button onClick={handleClick} className="button" id="stageButton" >Start</button>
    </>
  )
};
export default PickStage;
