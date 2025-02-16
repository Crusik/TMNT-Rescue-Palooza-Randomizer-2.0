import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Stages from './Stages';
import TitleScreen from './TitleScreen';
import './App.scss';
import cowabunga from './Images/cowabunga.png';

function App() {
    const [showImage, setShowImage] = useState(false); // State for the cowabunga image
    const [numberOfPlayers, setNumberOfPlayers] = useState(null); // State for number of players

    // Show the Cowabunga image
    const handleShowImage = () => setShowImage(true);

    // Hide the Cowabunga image
    const handleHideImage = () => setShowImage(false);

    const handlePlayerSelection = (players) => {
        setNumberOfPlayers(players);
    };

    // Add the beforeunload event handler for confirmation on page reload/leave
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            // The returnValue is what triggers the confirmation dialog
            event.returnValue = "Are you sure you want to leave? Your progress may be lost.";
        };

        // Add the event listener when the component mounts
        window.addEventListener("beforeunload", handleBeforeUnload);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    // Render the TitleScreen if no player count is selected
    if (numberOfPlayers === null) {
        return (
            <TitleScreen onPlayerSelect={handlePlayerSelection} />
        );
    }

    return (
        <div className='app'>
            {/* Sidebar with a handler for showing the image */}
            <Sidebar handleShowImage={handleShowImage} numberOfPlayers={numberOfPlayers}/>

            {/* Stages layout based on selected number of players */}
            <Stages numberOfPlayers={numberOfPlayers} />

            {/* Cowabunga image container */}
            <div className="image-container">
                {showImage && (
                    <img
                        src={cowabunga}
                        alt="Cowabunga"
                        className="cowabunga"
                        onClick={handleHideImage}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
