// Normal/Story Mode
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
                    count: 2
                },
                {
                    id: 1,
                    character: "Leo",
                    isActive: true,
                    count: 2
                },
                {
                    id: 2,
                    character: "Mikey",
                    isActive: true,
                    count: 2
                },
                {
                    id: 3,
                    character: "Raph",
                    isActive: true,
                    count: 2
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 5,
                    character: "Bebop",
                    isActive: true,
                    count: 1
                },
                {
                    id: 6,
                    character: "Rocksteady",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 8,
                    character: "Rasputin",
                    isActive: true,
                    count: 1
                },
                {
                    id: 9,
                    character: "Napoleon",
                    isActive: true,
                    count: 1
                },
                {
                    id: 10,
                    character: "Atilla",
                    isActive: true,
                    count: 1
                },
                {
                    id: 11,
                    character: "Leatherhead",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 13,
                    character: "Armaggon",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 15,
                    character: "Rat King",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 17,
                    character: "Ace Duck",
                    isActive: true,
                    count: 1
                },
                {
                    id: 18,
                    character: "Chrome Dome",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 20,
                    character: "Kala",
                    isActive: true,
                    count: 1
                },
                {
                    id: 21,
                    character: "Zak",
                    isActive: true,
                    count: 1
                },
                {
                    id: 22,
                    character: "Anthrax",
                    isActive: true,
                    count: 1
                },
                {
                    id: 23,
                    character: "Traag",
                    isActive: true,
                    count: 1
                },
                {
                    id: 24,
                    character: "Granitor",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 26,
                    character: "Usagi",
                    isActive: true,
                    count: 1
                },
                {
                    id: 27,
                    character: "Lotus",
                    isActive: true,
                    count: 1
                },
                {
                    id: 28,
                    character: "Tatsu",
                    isActive: true,
                    count: 1
                },
                {
                    id: 29,
                    character: "Shogun",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 31,
                    character: "Burne",
                    isActive: true,
                    count: 1
                },
                {
                    id: 32,
                    character: "Vernon",
                    isActive: true,
                    count: 1
                },
                {
                    id: 33,
                    character: "Baxter",
                    isActive: true,
                    count: 1
                },
                {
                    id: 34,
                    character: "Karai",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 36,
                    character: "Wingnut",
                    isActive: true,
                    count: 1
                },
                {
                    id: 37,
                    character: "Groundchuck",
                    isActive: true,
                    count: 1
                },
                {
                    id: 38,
                    character: "Dirtbag",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 40,
                    character: "Fugitoid",
                    isActive: true,
                    count: 1
                },
                {
                    id: 41,
                    character: "Tora",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 43,
                    character: "Tempestra",
                    isActive: true,
                    count: 1
                },
                {
                    id: 44,
                    character: "Triceraton",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 46,
                    character: "Slash",
                    isActive: true,
                    count: 1
                },
                {
                    id: 47,
                    character: "Mecaturtle",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 49,
                    character: "Zach",
                    isActive: true,
                    count: 1
                },
                {
                    id: 50,
                    character: "Tokka",
                    isActive: true,
                    count: 1
                },
                {
                    id: 51,
                    character: "Rahzar",
                    isActive: true,
                    count: 1
                }
            ]
        }
    ],
}

// Arcade Mode. All characters will be unlocked. Turtles and "normal" characters will start with +1 count. Need to add the additional characters to the Default stage.

const initialState2 = {
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
                    count: 2
                },
                {
                    id: 1,
                    character: "Leo",
                    isActive: true,
                    count: 2
                },
                {
                    id: 2,
                    character: "Mikey",
                    isActive: true,
                    count: 2
                },
                {
                    id: 3,
                    character: "Raph",
                    isActive: true,
                    count: 2
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 5,
                    character: "Bebop",
                    isActive: true,
                    count: 1
                },
                {
                    id: 6,
                    character: "Rocksteady",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 8,
                    character: "Rasputin",
                    isActive: true,
                    count: 1
                },
                {
                    id: 9,
                    character: "Napoleon",
                    isActive: true,
                    count: 1
                },
                {
                    id: 10,
                    character: "Atilla",
                    isActive: true,
                    count: 1
                },
                {
                    id: 11,
                    character: "Leatherhead",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 13,
                    character: "Armaggon",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 15,
                    character: "Rat King",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 17,
                    character: "Ace Duck",
                    isActive: true,
                    count: 1
                },
                {
                    id: 18,
                    character: "Chrome Dome",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 20,
                    character: "Kala",
                    isActive: true,
                    count: 1
                },
                {
                    id: 21,
                    character: "Zak",
                    isActive: true,
                    count: 1
                },
                {
                    id: 22,
                    character: "Anthrax",
                    isActive: true,
                    count: 1
                },
                {
                    id: 23,
                    character: "Traag",
                    isActive: true,
                    count: 1
                },
                {
                    id: 24,
                    character: "Granitor",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 26,
                    character: "Usagi",
                    isActive: true,
                    count: 1
                },
                {
                    id: 27,
                    character: "Lotus",
                    isActive: true,
                    count: 1
                },
                {
                    id: 28,
                    character: "Tatsu",
                    isActive: true,
                    count: 1
                },
                {
                    id: 29,
                    character: "Shogun",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 31,
                    character: "Burne",
                    isActive: true,
                    count: 1
                },
                {
                    id: 32,
                    character: "Vernon",
                    isActive: true,
                    count: 1
                },
                {
                    id: 33,
                    character: "Baxter",
                    isActive: true,
                    count: 1
                },
                {
                    id: 34,
                    character: "Karai",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 36,
                    character: "Wingnut",
                    isActive: true,
                    count: 1
                },
                {
                    id: 37,
                    character: "Groundchuck",
                    isActive: true,
                    count: 1
                },
                {
                    id: 38,
                    character: "Dirtbag",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 40,
                    character: "Fugitoid",
                    isActive: true,
                    count: 1
                },
                {
                    id: 41,
                    character: "Tora",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 43,
                    character: "Tempestra",
                    isActive: true,
                    count: 1
                },
                {
                    id: 44,
                    character: "Triceraton",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 46,
                    character: "Slash",
                    isActive: true,
                    count: 1
                },
                {
                    id: 47,
                    character: "Mecaturtle",
                    isActive: true,
                    count: 1
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
                    isActive: true,
                    count: 1
                },
                {
                    id: 49,
                    character: "Zach",
                    isActive: true,
                    count: 1
                },
                {
                    id: 50,
                    character: "Tokka",
                    isActive: true,
                    count: 1
                },
                {
                    id: 51,
                    character: "Rahzar",
                    isActive: true,
                    count: 1
                }
            ]
        }
    ],
}

console.log(initialState)
console.log(initialState2)