// import { useState } from "react";

// const [characterList, setCharacterList] = useState([
//     {
//       id: 1,
//       character: "Don",
//       isActive: true,
//       count: 0
//     },
//     {
//       id: 2,
//       character: "Leo",
//       isActive: true,
//       count: 0
//     },
//     {
//       id: 3,
//       character: "Mikey",
//       isActive: true,
//       count: 0
//     },
//     {
//       id: 4,
//       character: "Raph",
//       isActive: true,
//       count: 0

      
//     },
//   ])

export const characters = (state = characterList, action) => {
    switch (action.type) {
        case 'ISACTIVE':
            return characterList.isActive = true;
        case 'ISINACTIVE':
            return characterList.isActive = false;
        default:
            return state;
    }
}

export const stageList = [
    {
        stage: "Default",
        characters: [
            {
                id: 0,
                character: "Don",
                isActive: true,
                count: 0
            },
            {
                id: 1,
                character: "Leo",
                isActive: true,
                count: 0
            },
            {
                id: 2,
                character: "Mikey",
                isActive: true,
                count: 0
            },
            {
                id: 3,
                character: "Raph",
                isActive: true,
                count: 0
            },
        ]
    },
    {
        stage: "April's",
        characters: [
            {
                id: 4,
                character: "April",
                isActive: false,
                count: 0
            },
            {
                id: 5,
                character: "Bebop",
                isActive: false,
                count: 0
            },
            {
                id: 6,
                character: "Rocksteady",
                isActive: false,
                count: 0
            }
        ]
    },
    {
        stage: "Swamp",
        characters: [
            {
                id: 7,
                character: "Genghis",
                isActive: false,
                count: 0
            },
            {
                id: 8,
                character: "Rasputin",
                isActive: false,
                count: 0
            },
            {
                id: 9,
                character: "Napoleon",
                isActive: false,
                count: 0
            },
            {
                id: 10,
                character: "Atilla",
                isActive: false,
                count: 0
            },
            {
                id: 11,
                character: "Leatherhead",
                isActive: false,
                count: 0
            },
        ]
    },
    {    
        stage: "Beach",
        characters: [
            {
                id: 12,
                character: "Ray Fillet",
                isActive: false,
                count: 0
            },
            {
                id: 13,
                character: "Armaggon",
                isActive: false,
                count: 0
            }
        ]
    },
    {
        stage: "Sewer",
        characters: [
            {
                id: 14,
                character: "Splinter",
                isActive: false,
                count: 0
            },
            {
                id: 15,
                character: "Rat King",
                isActive: false,
                count: 0
            }
        ]
    },
    {
        stage: "Van",
        characters: [
            {
                id: 16,
                character: "Mondo Gecko",
                isActive: false,
                count: 0
            },
            {
                id: 17,
                character: "Ace Duck",
                isActive: false,
                count: 0
            },
            {
                id: 18,
                character: "Chrome Dome",
                isActive: false,
                count: 0
            }
        ]
    },
    {
        stage: "Dim.X",
        characters: [
            {
                id: 19,
                character: "Dask",
                isActive: false,
                count: 0
            },
            {
                id: 20,
                character: "Kala",
                isActive: false,
                count: 0
            },
            {
                id: 21,
                character: "Zak",
                isActive: false,
                count: 0
            },
            {
                id: 22,
                character: "Anthrax",
                isActive: false,
                count: 0
            },
            {
                id: 23,
                character: "Traag",
                isActive: false,
                count: 0
            },
            {
                id: 24,
                character: "Granitor",
                isActive: false,
                count: 0
            }
        ]
    },
    {
        stage: "Dojo",
        characters: [
            {
                id: 25,
                character: "Aska",
                isActive: false,
                count: 0
            },
            {
                id: 26,
                character: "Usagi",
                isActive: false,
                count: 0
            },
            {
                id: 27,
                character: "Lotus",
                isActive: false,
                count: 0
            },
            {
                id: 28,
                character: "Tatsu",
                isActive: false,
                count: 0
            },
            {
                id: 29,
                character: "Shogun",
                isActive: false,
                count: 0
            }
        ]
    },
    {
        stage: "Channel 6",
        characters: [
            {
                id: 30,
                character: "Irma",
                isActive: false,
                count: 0
            },
            {
                id: 31,
                character: "Burne",
                isActive: false,
                count: 0
            },
            {
                id: 32,
                character: "Vernon",
                isActive: false,
                count: 0
            },
            {
                id: 33,
                character: "Baxter",
                isActive: false,
                count: 0
            },
            {
                id: 34,
                character: "Karai",
                isActive: false,
                count: 0
            }
        ]
    },
    {
        stage: "Ship",
        characters: [
            {
                id: 35,
                character: "Mona Lisa",
                isActive: false,
                count: 0
            },
            {
                id: 36,
                character: "Wingnut",
                isActive: false,
                count: 0
            },
            {
                id: 37,
                character: "Groundchuck",
                isActive: false,
                count: 0
            },
            {
                id: 38,
                character: "Dirtbag",
                isActive: false,
                count: 0
            }
        ]
    },
    {
        stage: "Park",
        characters: [
            {
                id: 39,
                character: "Hothead",
                isActive: false,
                count: 0
            },
            {
                id: 40,
                character: "Fugitoid",
                isActive: false,
                count: 0
            },
            {
                id: 41,
                character: "Tora",
                isActive: false,
                count: 0
            }
        ]
    },
    {
        stage: "Street",
        characters: [
            {
                id: 42,
                character: "Casey Jones",
                isActive: false,
                count: 0
            },
            {
                id: 43,
                character: "Tempestra",
                isActive: false,
                count: 0
            },
            {
                id: 44,
                character: "Triceraton",
                isActive: false,
                count: 0
            }
        ]
    },
    {
        stage: "Rooftop",
        characters: [
            {
                id: 45,
                character: "Metalhead",
                isActive: false,
                count: 0
            },
            {
                id: 46,
                character: "Slash",
                isActive: false,
                count: 0
            },
            {
                id: 47,
                character: "Mecaturtle",
                isActive: false,
                count: 0
            }
        ]
    },
    {
        stage: "Construction",
        characters: [
            {
                id: 48,
                character: "Muckman",
                isActive: false,
                count: 0
            },
            {
                id: 49,
                character: "Zach",
                isActive: false,
                count: 0
            },
            {
                id: 50,
                character: "Tokka",
                isActive: false,
                count: 0
            },
            {
                id: 51,
                character: "Rahzar",
                isActive: false,
                count: 0
            }
        ]
    },
]