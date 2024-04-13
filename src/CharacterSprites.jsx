import React from 'react';
import './CharacterSprites.scss';
import { useSelector } from 'react-redux';
// import { stageListData } from './redux/stageList';
import TMNT from './Images/TMNT.png';


const CharacterSprites = () => {
    const stageListData = useSelector((state) => state.stageList.stageListData);

    // Flatten the array of characters
    const allCharacters = stageListData.flatMap(stage => stage.characters);

    return (
        <div className="container">
            <div className="character-sprites">
                {allCharacters.map(character => (
                    <img
                    key={character.id}
                    src={character.isActive ?
                        require(`./Images/Turtle Sprites/${character.character}/${character.character} - Color.png`)
                        : require(`./Images/Turtle Sprites/${character.character}/${character.character} - Grey.png`)
                    }
                    alt={character.character}
                    className={`character-sprites ${character.character}`}
                    />
                ))}
            </div>
            <img src={TMNT} alt='TMNT Rescue Palooza' className='TMNT-Logo'/>
        </div>
    );
}


export default CharacterSprites;