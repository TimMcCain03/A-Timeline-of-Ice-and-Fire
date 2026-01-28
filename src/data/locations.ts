export type Location = {
    id: string
    name: string
    x: number
    y: number
}

export const locations: Location[] = [
    // the north
    {
        id: "haunted_forest",
        name: "Haunted Forest",
        x: 900,
        y: 3490,
    },
    {
        id: 'hills_north_winterfell',
        name: "Hills North of Winterfell",
        x: 700,
        y: 3010,
    },
    {
        id: 'winterfell',
        name: 'Winterfell',
        x: 682,
        y: 2930,  
    },

    // the Iron Islands

    // the riverlands
    
    // the vale of arryn
    
    // the westerlands
    
    // the crownlands
    {
        id: 'kings_landing',
        name: "King's Landing",
        x: 922,
        y: 1638,
    },

    // the reach
    
    // the stromlands

    // dorne

    // essos
    {
        id: 'pentos',
        name: 'Pentos',
        x: 1640,
        y: 1660,
    },
]