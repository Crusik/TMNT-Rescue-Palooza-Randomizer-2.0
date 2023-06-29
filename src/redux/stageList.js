import { createSlice } from "@reduxjs/toolkit";

// export const stageListSlice = createSlice({
//     name: "stageList",
//     initialState: {
//         value: stageList
//     }
// })

// Will run a forEach when changing the isActive state on each stage. When the stage is "isActive=true" the characters will all be the opposite.
export const stageListData = [
    {
        "Default": [{
            isActive: false,
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
                }
            ]
        }]
    },
    {
        "April's": [{
            isActive: true,
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
        }]
    },
    {
        stage: "Swamp",
        isActive: true,
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
        isActive: true,
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
        isActive: true,
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
        isActive: true,
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
        isActive: true,
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
        isActive: true,
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
        isActive: true,
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
        isActive: true,
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
        isActive: true,
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
        isActive: true,
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
        isActive: true,
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
        "Construction": [{
            isActive: true,
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
        }]
    }
]

export const stageListSlice = createSlice({
    name: "stageList",
    initialState: {
        stageListIsActiveValue: stageListData[1][Object.keys(stageListData[1])[0]][0].isActive
    },
    reducers: {
        inactive: (state) => {
            console.log(state.stageListIsActiveValue)
            state.stageListIsActiveValue = false;
            console.log(state.stageListIsActiveValue)
        },
        active: (state) => {
            console.log(state.stageListIsActiveValue)
            state.stageListIsActiveValue = true;
            console.log(state.stageListIsActiveValue)
        }
    }
})

// export let i = 0;

const activeStages = Object.keys(stageListData)
    .filter(index => stageListData[index][Object.keys(stageListData[index])[0]][0].isActive)
    .map(index => Object.keys(stageListData[index])[0]);

export const { inactive, active } = stageListSlice.actions;

export default stageListSlice.reducer;

// export const charactersReducer = (state = characterList, action) => {
//     switch (action.type) {
//         case 'ISACTIVE':
//             return characterList.isActive = true;
//         case 'ISINACTIVE':
//             return characterList.isActive = false;
//         default:
//             return state;
//     }
// }