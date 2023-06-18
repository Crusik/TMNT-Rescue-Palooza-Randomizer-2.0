// This will be the central "Hub" for the application. Keeping track of the Stage and Character lists
import { gsap } from 'gsap';

// The following will add a list on screen as well as a Sprite for all the available characters. Still needs stuff to work.
// {characterList.map((character) => <Character name={character.name} sprite={character.sprite} />)}

export default function Main () {
    let allButtons = document.querySelectorAll('button');

    let characterList = [
        { character: "Leo", sprite: "", voice: document.getElementById("vanish") },
        { character: "Mike", sprite: "", voice: document.getElementById("chucker") },
        { character: "Raph", sprite: "", voice: document.getElementById("punker") },
        { character: "Don", sprite: "", voice: document.getElementById("listen") }
    ];

    let stageList = [{
        stage: "April's",
        characters: [
            { character: "April", sprite: "", voice: "" },
            { character: "Bebop", sprite: "", voice: "" },
            { character: "Rocksteady", sprite: "", voice: "" }
        ]
    }, {
        stage: "Swamp",
        characters: [
            { character: "Genghis", sprite: "", voice: "" },
            { character: "Rasputin", sprite: "", voice: "" },
            { character: "Napoleon", sprite: "", voice: "" },
            { character: "Atilla", sprite: "", voice: "" },
            { character: "Leatherhead", sprite: "", voice: "" },
        ]

    },
    {
        stage: "Beach",
        characters: [
            { character: "Ray Fillet", sprite: "", voice: "" },
            { character: "Armaggon", sprite: "", voice: "", }
        ]
    },
    {
        stage: "Sewer",
        characters: [
            { character: "Splinter", sprite: "", voice: "" },
            { character: "Rat King", sprite: "", voice: "" }
        ]
    },
    {
        stage: "Van",
        characters: [
            { character: "Mondo Gecko", sprite: "", voice: "" },
            { character: "Ace Duck", sprite: "", voice: "" },
            { character: "Chrome Dome", sprite: "", voice: "" }
        ]
    }, {
        stage: "Dim.X",
        characters: [
            { character: "Dask", sprite: "", voice: "" },
            { character: "Kala", sprite: "", voice: "" },
            { character: "Zak", sprite: "", voice: "" },
            { character: "Anthrax", sprite: "", voice: "" },
            { character: "Traag", sprite: "", voice: "" },
            { character: "Granitor", sprite: "", voice: "" }
        ]
    }, {
        stage: "Dojo",
        characters: [
            { character: "Aska", sprite: "", voice: "" },
            { character: "Usagi", sprite: "", voice: "" },
            { character: "Lotus", sprite: "", voice: "" },
            { character: "Tatsu", sprite: "", voice: "" },
            { character: "Shogun", sprite: "", voice: "" }
        ]
    }, {
        stage: "Channel 6",
        characters: [
            { character: "Irma", sprite: "", voice: "" },
            { character: "Burne", sprite: "", voice: "" },
            { character: "Vernon", sprite: "", voice: "" },
            { character: "Baxter", sprite: "", voice: "" },
            { character: "Karai", sprite: "", voice: "" }
        ]
    }, {
        stage: "Ship",
        characters: [
            { character: "Mona Lisa", sprite: "", voice: "" },
            { character: "Wingnut", sprite: "", voice: "" },
            { character: "Groundchuck", sprite: "", voice: "" },
            { character: "Dirtbag", sprite: "", voice: "" }
        ]
    }, {
        stage: "Park",
        characters: [
            { character: "Hothead", sprite: "", voice: "" },
            { character: "Fugitoid", sprite: "", voice: "" },
            { character: "Tora", sprite: "", voice: "" }
        ]
    }, {
        stage: "Street",
        characters: [
            { character: "Casey Jones", sprite: "", voice: document.getElementById("punker") },
            { character: "Tempestra", sprite: "", voice: "" },
            { character: "Triceraton", sprite: "", voice: "" }
        ]
    }, {
        stage: "Rooftop",
        characters: [
            { character: "Metalhead", sprite: "", voice: "" },
            { character: "Slash", sprite: "", voice: "" },
            { character: "Mecaturtle", sprite: "", voice: "" }
        ]
    }, {
        stage: "Construction",
        characters: [
            { character: "Muckman", sprite: "", voice: "" },
            { character: "Zach", sprite: "", voice: "" },
            { character: "Tokka", sprite: "", voice: "" },
            { character: "Rahzar", sprite: "", voice: "" }
        ]
    }
    ];

    let audioClips = ['tmntClear', 'tmntAreaClear', 'tmntStageClear'];

    let removingClips = ["chucker", "jose", "vanish", "punker", "30seconds", "april", "listen", "splinter", "theRat"];

    let newStageList = [{ stage: "Default", characters: ["Leo", "Mike", "Raph", "Don"] }]

    let i = 0;
    // Actual x,y values
    let x = 0;
    let y = 13;
    const minTimer = 10;
    const maxTimer = 20;
    // for quick testing
    // let x = 12;
    // let y = 46;
    const stageButton = document.getElementById("stageButton");
    const characterButton = document.getElementById("characterButton");
    const removeStageButton = document.getElementById("removeStageButton");
    const removeCharacterButton = document.getElementById("removeCharacterButton");
    let selectedStages = [];

    function enableButtons() {
        allButtons.forEach(button => {
            button.disabled = false;
        });
        // This keep the Stage Button disabled after the very first character is picked since you need to pick two before picking the stage.
        // disableStageButton();
    }

    function disableButtons() {
        allButtons.forEach(button => {
            button.disabled = true;
        })
    }

    function enableRemoveButtons(button1, button2) {
        button1.disabled = false;
        button2.disabled = false;
    }

    function removeButtonsCheck() {
        if ((y === 13) || ((y - 13)/2 === x)) {
            removeCharacterButton.disabled = true;
            if ((x === 0) || ((y - 13)/2 !== x)) {
                removeStageButton.disabled = true;
            } else {
                return;
            }
        } else if ((x === 0) || ((y - 13)/2 !== x)) {
            removeStageButton.disabled = true;
        } else {
            removeCharacterButton.disabled = false;
            removeStageButton.disabled = false;
        }
    }

    function stageAndCharacterCheck(){
        enableButtons();
        // This will check if either the all the characters or stages have been selected and will disable the corresponding button(s).
        if (y === 47 && x === 13) {
            // This means all selections have been made and will play "Cowabunga" while both "Picker" buttons are now disabled.
            completed();
            stageButton.disabled = true;
            characterButton.disabled = true;
        } else if ((x === 13) || (y - 13 - (x * 2) < 2)) {
            stageButton.disabled = true;
            removeButtonsCheck()
        } else if ((y === 47) || (y - 13 - (x * 2) === 2)) {
            characterButton.disabled = true;
            removeButtonsCheck()
        } else {
            characterButton.disabled = false;
            stageButton.disabled = false;
            removeButtonsCheck()
        }
    }

    function randomRemovalSound() {
        var index = Math.floor(Math.random() * 1000) % removingClips.length;
        var id = removingClips[index];
        var audioElement2 = document.getElementById(id);
        audioElement2.play();
    }

    function disableStageButton() {
        if (y < 15) {
            stageButton.disabled = true;
            removeButtonsCheck()
        }
    }
    // Makes the default state of the Stage button disabled until 2 characters have been selected.
    disableStageButton();

    // To play voice clilp
    // function playVoice() {
    //     for (var i = 0; i < characterList.length; i++) {
    //         if (characters.textContent === characterList[i]["character"]) {
    //             characterList[i]['voice'].play();
    //         }
    //     }
    //     // let characterVoice = characterList[i].voice;
    //     // characterVoice.play();
    // }

    function randomStageSound() {
        var index = Math.floor(Math.random() * 1000) % audioClips.length;
        var id = audioClips[index];
        var audioElement = document.getElementById(id);
        audioElement.play();
    }

    // This needs to be addjusted so that on the 2nd run, the character list is updated without the first character selection
    function runTwice(func) {
        disableButtons()
        func()
        setTimeout(()=> {
            disableButtons()
            func()
            setTimeout(()=> {
                stageAndCharacterCheck();
            }, 10000);
        }, 10000)
        // }, 500 * rand + 3000);
    }

    function removalAnimation(lastEntry) {
        const tl = gsap.timeline({ defaults: { ease: "power0.out" } });
        tl.to(lastEntry, { transform: "translateX(-100%)", duration: 1 });
        tl.to(lastEntry, { autoAlpha: "0", duration: 1 }, "-=1");
    }

    function completed() {
        let cowabungaLogo = document.getElementById("cowabunga-logo");
        let cowabunga = document.getElementById("cowabunga");
        // let cowabungaLogo = document.getElementById("cowabunga-logo");
            cowabunga.play();
            // Logo needs to fade-in for 2 second, stay until the page is clicked anywhere, then fade-out.
            cowabungaLogo.classList.add('fadeIn');
            if (cowabungaLogo.classList.contains('fadeIn')) {
                disableButtons(removeStageButton, removeCharacterButton);
            cowabungaLogo.addEventListener("click", function() {
                    // I am pretty sure the following is what is messing up the remove buttons not being disabled when I press them when all characters and stages are selected.
                    // if (stageButton.disabled == true && characterButton.disabled == true) {
                    //     if (removeCharacterButton.disabled == true && removeStageButton.disabled == true) {
                if (cowabungaLogo.classList.contains('fadeIn')) {
                    stageAndCharacterCheck();
                    enableRemoveButtons(removeStageButton, removeCharacterButton);
                } else {
                    return;
                }
                cowabungaLogo.classList.remove('fadeIn');
                })
        }
    }

}