import React from 'react';
import './Stages.scss';
import Stage from './Stage';
import TMNT from './Images/TMNT.png'
import CharacterSprites from './CharacterSprites';

function Stages(){
    return (
        <div className='stages-container'>
            <div className="stages-grid">
                    <Stage stageIndex={0} player1Id={13} player2Id={14}/>
                    <Stage stageIndex={1} player1Id={15} player2Id={16}/>
                    <Stage stageIndex={2} player1Id={17} player2Id={18}/>
                    <Stage stageIndex={3} player1Id={19} player2Id={20}/>
                    <Stage stageIndex={4} player1Id={21} player2Id={22}/>
                    <Stage stageIndex={5} player1Id={23} player2Id={24}/>
                    <Stage stageIndex={6} player1Id={25} player2Id={26}/>
                    <Stage stageIndex={7} player1Id={27} player2Id={28}/>
                    <Stage stageIndex={8} player1Id={29} player2Id={30}/>
                    <img src={TMNT} alt='TMNT Rescue Palooza' className='TMNT-Logo'/>
                    <Stage stageIndex={9} player1Id={31} player2Id={32}/>
                    <Stage stageIndex={10} player1Id={33} player2Id={34}/>
                    <Stage stageIndex={11} player1Id={35} player2Id={36}/>
                    <Stage stageIndex={12} player1Id={37} player2Id={38}/>
                    <Stage stageName="Krang" player1Id={39} player2Id={40}/>
                    <Stage stageName="Techno-Drome" player1Id={41} player2Id={42}/>
                    <Stage stageName="Techno-Drome" player1Id={43} player2Id={44}/>
                    <Stage stageName="Techno-Drome" player1Id={45} player2Id={46}/>
            </div>
            <CharacterSprites />

            {/* <img src={TMNT} alt='TMNT Rescue Palooza' className='TMNT-Logo'/> */}
        </div>
    );
}

export default Stages;