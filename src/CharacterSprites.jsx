import React from 'react';
import './CharacterSprites.scss';

const CharacterSprites = () => {
    return (
        <div className="character-sprites">
            <img src={require('./Images/Turtle Sprites/Leo/Leo - Color.png')} alt="Leo" className="character-sprites leo" />
            <img src={require('./Images/Turtle Sprites/Mikey/Mikey - Color.png')} alt="Mikey" className="character-sprites mikey" />
            <img src={require('./Images/Turtle Sprites/Donny/Donny - Color.png')} alt="Don" className="character-sprites donny" />
            <img src={require('./Images/Turtle Sprites/Raph/Raph - Color.png')} alt="Raph" className="character-sprites raph" />
            <img src={require('./Images/Turtle Sprites/Splinter/Splinter - Color.png')} alt="Splinter" className="character-sprites splinter" />
            <img src={require('./Images/Turtle Sprites/April/April - Color.png')} alt="April" className="character-sprites april" />
            <img src={require('./Images/Turtle Sprites/Irma/Irma - Color.png')} alt="Irma" className="character-sprites irma" />
            <img src={require('./Images/Turtle Sprites/Burne/Burne - Color.png')} alt="Burne" className="character-sprites burne" />
            <img src={require('./Images/Turtle Sprites/Vernon/Vernon - Color.png')} alt="Vernon" className="character-sprites vernon" />
        </div>
    );
};

export default CharacterSprites;