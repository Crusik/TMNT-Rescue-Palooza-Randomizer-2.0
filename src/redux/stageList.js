import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stageListData: [
        {
            stageId: 0,
            stage: "Default",
            isActive: false,
            characters: [
                {
                    id: 0,
                    character: "Don",
                    isActive: true,
                    count: 1
                },
                {
                    id: 1,
                    character: "Leo",
                    isActive: true,
                    count: 1
                },
                {
                    id: 2,
                    character: "Mikey",
                    isActive: true,
                    count: 1
                },
                {
                    id: 3,
                    character: "Raph",
                    isActive: true,
                    count: 1
                }
            ]
        },
        {
            stageId: 1,
            stage: "April's",
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
        },
        {
            stageId: 2,
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
            stageId: 3,
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
            stageId: 4,
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
            stageId: 5,
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
            stageId: 6,
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
            stageId: 7,
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
            stageId: 8,
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
            stageId: 9,
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
            stageId: 10,
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
            stageId: 11,
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
            stageId: 12,
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
            stageId: 13,
            stage: "Construction",
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
        }
    ],
}

export const stageListSlice = createSlice({
    name: "stageList",
    initialState,
    reducers: {
        // This activateStage may not work correctly
        activateStage: (state, action) => {
            const { stageId } = action.payload;
            state.stageListData = state.stageListData.map((stage, index) => {
              if (index === stageId) {
                const updatedStage = {
                  ...stage,
                  isActive: true
                };
                updatedStage.characters.forEach(character => {
                    character.isActive = false;
                });
                return updatedStage;
              }
              return stage;
            });
        },
        deactivateStage: (state, action) => {
            const { stageId } = action.payload;
            state.stageListData = state.stageListData.map((stage, index) => {
              if (index === stageId) {
                // Deactivate the stage
                const updatedStage = {
                  ...stage,
                  isActive: false
                };
                // Activate characters of the stage
                updatedStage.characters.forEach(character => {
                  character.isActive = true;
                });         
                return updatedStage;
              }
              return stage;
            });
        },
      
        deactivateCharacter: (state, action) => {
            const selectedCharacter = action.payload;
            state.stageListData.forEach(stage => {
                stage.characters.forEach(character => {
                    if (character.character === selectedCharacter) {
                        if(character.count >= 3) {
                            character.isActive = false;
                        }
                    }
                });
            });
        },
        // deactivateCharacter: (state, action) => {
        //     const { stageId, characterId } = action.payload;
        //     const stage = state.stageListData.find(stage => stage.stageId === stageId);
        //     if (stage) {
        //         const character = stage.characters.find(character => character.id === characterId);
        //         if (character) {
        //             character.count += 1;
        //                 if (character.count === 3) {
        //                     character.isActive = false;
        //                 }
        //         }
        //     }
        // },

        incrementCount: (state, action) => {
            const selectedCharacter = action.payload;
            state.stageListData.forEach(stage => {
                stage.characters.forEach(character => {
                    if (character.character === selectedCharacter) {
                    character.count += 1;
                    }
                });
            });
        },
    }
})


export const { deactivateStage, activateStage, activateCharacter, deactivateCharacter, incrementCount } = stageListSlice.actions;

export default stageListSlice.reducer;