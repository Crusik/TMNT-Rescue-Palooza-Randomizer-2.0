import React from 'react';
import './CharacterSprites.scss';
import { useDispatch, useSelector } from 'react-redux';
// import { stageListData } from './redux/stageList';


const CharacterSprites = () => {
    const stageListData = useSelector((state) => state.stageList.stageListData);

    // Flatten the array of characters
    const allCharacters = stageListData.flatMap(stage => stage.characters);

    return (
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
    );
}


export default CharacterSprites;