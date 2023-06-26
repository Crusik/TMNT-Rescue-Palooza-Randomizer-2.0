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

export const characterList = [
    {
        id: 0,
        character: "Don",
        isActive: true,
        count: 0,
        stage: "Default"
    },
    {
        id: 1,
        character: "Leo",
        isActive: true,
        count: 0,
        stage: "Default"
    },
    {
        id: 2,
        character: "Mikey",
        isActive: true,
        count: 0,
        stage: "Default"
    },
    {
        id: 3,
        character: "Raph",
        isActive: true,
        count: 0,
        stage: "Default"
    },
    {
        id: 4,
        character: "April",
        isActive: false,
        count: 0,
        stage: "April's"
    },
    {
        id: 5,
        character: "Bebop",
        isActive: false,
        count: 0,
        stage: "April's"
    },
    {
        id: 6,
        character: "Rocksteady",
        isActive: false,
        count: 0,
        stage: "April's"
    },
    {
        id: 7,
        character: "Genghis",
        isActive: false,
        count: 0,
        stage: "Swamp"
    },
    {
        id: 8,
        character: "Rasputin",
        isActive: false,
        count: 0,
        stage: "Swamp"
    },
    {
        id: 9,
        character: "Napoleon",
        isActive: false,
        count: 0,
        stage: "Swamp"
    },
    {
        id: 10,
        character: "Atilla",
        isActive: false,
        count: 0,
        stage: "Swamp"
    },
    {
        id: 11,
        character: "Leatherhead",
        isActive: false,
        count: 0,
        stage: "Swamp"
    },
    {
        id: 12,
        character: "Fillet",
        isActive: false,
        count: 0,
        stage: "Beach"
    },
    {
        id: 13,
        character: "Armaggon",
        isActive: false,
        count: 0,
        stage: "Beach"
    },
    {
        id: 14,
        character: "Splinter",
        isActive: false,
        count: 0,
        stage: "Sewer"
    },
    {
        id: 15,
        character: "Rat King",
        isActive: false,
        count: 0,
        stage: "Sewer"
    },
    {
        id: 16,
        character: "Mondo Gecko",
        isActive: false,
        count: 0,
        stage: "Van"
    },
    {
        id: 17,
        character: "Ace Duck",
        isActive: false,
        count: 0,
        stage: "Van"
    },
    {
        id: 18,
        character: "Chrome Dome",
        isActive: false,
        count: 0,
        stage: "Van"
    },
    {
        id: 19,
        character: "Dask",
        isActive: false,
        count: 0,
        stage: "Dim.X"
    },
    {
        id: 20,
        character: "Kala",
        isActive: false,
        count: 0,
        stage: "Dim.X"
    },
    {
        id: 21,
        character: "Zak",
        isActive: false,
        count: 0,
        stage: "Dim.X"
    },
    {
        id: 22,
        character: "Anthrax",
        isActive: false,
        count: 0,
        stage: "Dim.X"
    },
    {
        id: 23,
        character: "Traag",
        isActive: false,
        count: 0,
        stage: "Dim.X"
    },
    {
        id: 24,
        character: "Granitor",
        isActive: false,
        count: 0,
        stage: "Dim.X"
    },
    {
        id: 25,
        character: "Aska",
        isActive: false,
        count: 0,
        stage: "Dojo"
    },
    {
        id: 26,
        character: "Usagi",
        isActive: false,
        count: 0,
        stage: "Dojo"
    },
    {
        id: 27,
        character: "Lotus",
        isActive: false,
        count: 0,
        stage: "Dojo"
    },
    {
        id: 28,
        character: "Tatsu",
        isActive: false,
        count: 0,
        stage: "Dojo"
    },
    {
        id: 29,
        character: "Shogun",
        isActive: false,
        count: 0,
        stage: "Dojo"
    },
    {
        id: 30,
        character: "Irma",
        isActive: false,
        count: 0,
        stage: "Channel 6"
    },
    {
        id: 31,
        character: "Burne",
        isActive: false,
        count: 0,
        stage: "Channel 6"
    },
    {
        id: 32,
        character: "Vernon",
        isActive: false,
        count: 0,
        stage: "Channel 6"
    },
    {
        id: 33,
        character: "Baxter",
        isActive: false,
        count: 0,
        stage: "Channel 6"
    },
    {
        id: 34,
        character: "Karai",
        isActive: false,
        count: 0,
        stage: "Channel 6"
    },
    {
        id: 35,
        character: "Mona Lisa",
        isActive: false,
        count: 0,
        stage: "Ship"
    },
    {
        id: 36,
        character: "Mona Lisa",
        isActive: false,
        count: 0,
        stage: "Ship"
    },
    {
        id: 37,
        character: "Wingnut",
        isActive: false,
        count: 0,
        stage: "Ship"
    },
    {
        id: 38,
        character: "Groundchuck",
        isActive: false,
        count: 0,
        stage: "Ship"
    },
    {
        id: 39,
        character: "Dirtbag",
        isActive: false,
        count: 0,
        stage: "Ship"
    },
    {
        id: 40,
        character: "Hothead",
        isActive: false,
        count: 0,
        stage: "Park"
    },
    {
        id: 41,
        character: "Fugitoid",
        isActive: false,
        count: 0,
        stage: "Park"
    },
    {
        id: 42,
        character: "Tora",
        isActive: false,
        count: 0,
        stage: "Park"
    },
    {
        id: 43,
        character: "Casey Jones",
        isActive: false,
        count: 0,
        stage: "Street"
    },
    {
        id: 44,
        character: "Tempestra",
        isActive: false,
        count: 0,
        stage: "Street"
    },
    {
        id: 45,
        character: "Triceraton",
        isActive: false,
        count: 0,
        stage: "Street"
    },
    {
        id: 46,
        character: "Metalhead",
        isActive: false,
        count: 0,
        stage: "Rooftop"
    },
    {
        id: 47,
        character: "Slash",
        isActive: false,
        count: 0,
        stage: "Rooftop"
    },
    {
        id: 48,
        character: "Mecaturtle",
        isActive: false,
        count: 0,
        stage: "Rooftop"
    },
    {
        id: 49,
        character: "Muckman",
        isActive: false,
        count: 0,
        stage: "Construction"
    },
    {
        id: 50,
        character: "Zach",
        isActive: false,
        count: 0,
        stage: "Construction"
    },
    {
        id: 51,
        character: "Tokka",
        isActive: false,
        count: 0,
        stage: "Construction"
    },
    {
        id: 52,
        character: "Rahzar",
        isActive: false,
        count: 0,
        stage: "Construction"
    }
];

// export const characters = (state = characterList, action) => {
//     switch (action.type) {
//         case 'ISACTIVE':
//             return characterList.isActive = true;
//         case 'ISINACTIVE':
//             return characterList.isActive = false;
//         default:
//             return state;
//     }
// }