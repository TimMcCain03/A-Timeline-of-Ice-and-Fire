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
    {
        id: 'barrowlands',
        name: 'Barrowlands',
        x: 675,
        y: 2730,
    },
    {
        id: "kingsroad_to_castleblack",
        name: "King's Road to Castle Black",
        x: 885,
        y: 3240,
    },

    // the Iron Islands

    // the riverlands
    {
        id: "inn_at_the_crossroads",
        name: "Inn at the Crossroads",
        x: 846,
        y: 1990,
    },
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
    {
        id: 'outside_pentos',
        name: 'Outside the walls of Pentos',
        x: 1650,
        y: 1670,
    }
]