export type Chapter = {
  id: string
  pov: string
  book: string
  chapter: number
  locationId: string
  summary: string
}

export const chapters: Chapter[] = [
    // {
    //     id:
    //     pov:
    //     book:
    //     chapter:
    //     locationId:
    //     summary:
    // },
    {
        id: 'agot_prolouge',
        pov: 'Prolouge',
        book: 'AGOT',
        chapter: 0,
        locationId: 'haunted_forest',
        summary: "While tracking a group of wildling raiders beyond the Wall, three rangers of the Night's Watch encounter a group of Others. "
    },
    {
        id: 'agot_bran_1',
        pov: 'Bran Stark',
        book: 'AGOT',
        chapter: 1,
        locationId: 'hills_north_winterfell',
        summary: "Lord Eddard Stark dispenses justice to a Night's Watch deserter. When they are on their way back to Winterfell, Jon Snow and Robb Stark find six orphaned direwolf pups."
    },
    {
        id: 'agot_catlyn_1',
        pov: 'Catlyn Stark',
        book: 'AGOT',
        chapter: 2,
        locationId: 'winterfell_godswood',
        summary: "Lady Catelyn Tully seeks out her husband, Lord Eddard Stark, in the godswood of Winterfell to inform him of the news that his foster father, Lord Jon Arryn, the Hand of the King, is dead, and that King Robert I Baratheon, his family, and half his court are on their way to Winterfell."
    },
    {
        id: 'agot_daenerys_1',
        pov: 'Daenerys Targaren',
        book: 'AGOT',
        chapter: 3,
        locationId: 'pentos',
        summary: "The exiled Princess Daenerys Targaryen prepares to be presented to the Dothraki khal, Drogo, as her brother, the would-be king Viserys Targaryen, hopes to gain a Dothraki army through a marriage alliance."
    },
    {
        id: 'agot_eddard_1',
        pov: 'Ned Stark',
        book: 'AGOT',
        chapter: 4,
        locationId: 'winterfell',
        summary: "King Robert I Baratheon arrives with his party at Winterfell, where he offers Lord Eddard Stark the position of Hand of the King and proposes a betrothal between Eddard's daughter, Sansa and his own son, Prince Joffrey."
    },
]