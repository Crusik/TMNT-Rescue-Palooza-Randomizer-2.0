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

// function Stage(){
//     return (
//         <div className="stage">
//                 <h2 id="0">Stage</h2>
//                 <ul>
//                     <li><span id="13" className="character"></span></li>
//                     <li><span id="14" className="character"></span></li>
//                 </ul>
//             </div>
//     );
// }

// function Stage(){
//     return (
//         <>
//             <div className="stage">
//                 <h2 id="0">Stage</h2>
//                 <ul>
//                     <li><span id="13" className="character"></span></li>
//                     <li><span id="14" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h2 id="1">Stage</h2>
//                 <ul>
//                     <li><span id="15" className="character"></span></li>
//                     <li><span id="16" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h2 id="2">Stage</h2>
//                 <ul>
//                     <li><span id="17" className="character"></span></li>
//                     <li><span id="18" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h2 id="3">Stage</h2>
//                 <ul>
//                     <li><span id="19" className="character"></span></li>
//                     <li><span id="20" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h2 id="4">Stage</h2>
//                 <ul>
//                     <li><span id="21" className="character"></span></li>
//                     <li><span id="22" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h2 id="5">Stage</h2>
//                 <ul>
//                     <li><span id="23" className="character"></span></li>
//                     <li><span id="24" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h2 id="6">Stage</h2>
//                 <ul>
//                     <li><span id="25" className="character"></span></li>
//                     <li><span id="26" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h2 id="7">Stage</h2>
//                 <ul>
//                     <li><span id="27" className="character"></span></li>
//                     <li><span id="28" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h2 id="8">Stage</h2>
//                 <ul>
//                     <li><span id="29" className="character"></span></li>
//                     <li><span id="30" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h2 id="9">Stage</h2>
//                 <ul>
//                     <li><span id="31" className="character"></span></li>
//                     <li><span id="32" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h2 id="10">Stage</h2>
//                 <ul>
//                     <li><span id="33" className="character"></span></li>
//                     <li><span id="34" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h2 id="11">Stage</h2>
//                 <ul>
//                     <li><span id="35" className="character"></span></li>
//                     <li><span id="36" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h2 id="12">Stage</h2>
//                 <ul>
//                     <li><span id="37" className="character"></span></li>
//                     <li><span id="38" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h3>Krang</h3>
//                 <ul>
//                     <li><span id="39" className="character"></span></li>
//                     <li><span id="40" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h3>Techno-Drome</h3>
//                 <ul>
//                     <li><span id="41" className="character"></span></li>
//                     <li><span id="42" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h3>Techno-Drome <br />Round 2</h3>
//                 <ul>
//                     <li><span id="43" className="character"></span></li>
//                     <li><span id="44" className="character"></span></li>
//                 </ul>
//             </div>
//             <div className="stage">
//                 <h3>Techno-Drome <br /> Final</h3>
//                 <ul>
//                     <li><span id="45" className="character"></span></li>
//                     <li><span id="46" className="character"></span></li>
//                 </ul>
//             </div>
//         <div className="stage">
//             <p>The rules for this randomizer will be:</p>
//             <ol>
//                 If either player gets one of the four turtles at any point and wants to reroll their character they can. This does not count for the first stage, since you can only be one of the starting four turtles.
//             </ol>
//         </div>
//         <div className="logo">
//             <img src="Images/TMNT.png" height="250px" alt="Ninja Turtles" />
//         </div>
//         <div className="cowabunga-logo" id="cowabunga-logo">
//                 <img src="Images/cowabunga.png" alt="Cowabunga" />
//         </div>
//         </>
//     );
// }

export default Stage;