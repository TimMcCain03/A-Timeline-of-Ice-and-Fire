export type Chapter = {
  id: string
  pov: string
  book: string
  chapter: number
  chapterTitle: string
  locationId: string
  summary: string
}

export const chapters: Chapter[] = [
    // {
    //     id:
    //     pov:
    //     book:
    //     chapter:
    //     chapterTitle:
    //     locationId:
    //     summary:
    // },
    {
        id: 'agot_prolouge',
        pov: 'Will',
        book: 'AGOT',
        chapter: 0,
        chapterTitle: "Prologue",
        locationId: 'haunted_forest',
        summary: "While tracking a group of wildling raiders beyond the Wall, three rangers of the Night's Watch encounter a group of Others. "
    },
    {
        id: 'agot_bran_1',
        pov: 'Bran Stark',
        book: 'AGOT',
        chapter: 1,
        chapterTitle: "Bran I",
        locationId: 'hills_north_winterfell',
        summary: "Lord Eddard Stark dispenses justice to a Night's Watch deserter. When they are on their way back to Winterfell, Jon Snow and Robb Stark find six orphaned direwolf pups."
    },
    {
        id: 'agot_catlyn_1',
        pov: 'Catlyn Stark',
        book: 'AGOT',
        chapter: 2,
        chapterTitle: "Catlyn I",
        locationId: 'winterfell',
        summary: "Lady Catelyn Tully seeks out her husband, Lord Eddard Stark, in the godswood of Winterfell to inform him of the news that his foster father, Lord Jon Arryn, the Hand of the King, is dead, and that King Robert I Baratheon, his family, and half his court are on their way to Winterfell."
    },
    {
        id: 'agot_daenerys_1',
        pov: 'Daenerys Targaren',
        book: 'AGOT',
        chapter: 3,
        chapterTitle: 'Daenerys I',
        locationId: 'pentos',
        summary: "The exiled Princess Daenerys Targaryen prepares to be presented to the Dothraki khal, Drogo, as her brother, the would-be king Viserys Targaryen, hopes to gain a Dothraki army through a marriage alliance."
    },
    {
        id: 'agot_eddard_1',
        pov: 'Ned Stark',
        book: 'AGOT',
        chapter: 4,
        chapterTitle: "Ned I",
        locationId: 'winterfell',
        summary: "King Robert I Baratheon arrives with his party at Winterfell, where he offers Lord Eddard Stark the position of Hand of the King and proposes a betrothal between Eddard's daughter, Sansa and his own son, Prince Joffrey."
    },
    {
        id: 'agot_john_1',
        pov: 'John Snow',
        book: 'AGOT',
        chapter: 5,
        chapterTitle: "John I",
        locationId: 'winterfell',
        summary: "Jon Snow attends the feast Winterfell is holding for the royal guests and speaks with both Benjen Stark and Tyrion Lannister."
    },
    {
        id: 'agot_catlyn_2',
        pov: 'Catlyn Stark',
        book: 'AGOT',
        chapter: 6,
        chapterTitle: "Catlyn II",
        locationId: 'winterfell',
        summary: "A secret letter from her sister leads Catelyn to convince Ned to go to King's Landing and become the Hand of the King."
    },
    {
        id: 'agot_arya_1',
        pov: 'Arya Stark',
        book: 'AGOT',
        chapter: 7,
        chapterTitle: "Arya I",
        locationId: 'winterfell',
        summary: "Arya runs out on her needlework session to watch the boys practice with swords in the yard."
    },
    {
        id: 'agot_bran_2',
        pov: 'Bran Stark',
        book: 'AGOT',
        chapter: 8,
        chapterTitle: "Bran II",
        locationId: 'winterfell',
        summary: "Bran is climbing the towers of Winterfell when he discovers Cersei and Jaime Lannister making love and talking about the danger his father poses. Eventually, he is discovered and Jaime shoves him out the window."
    },
    {
        id: 'agot_tyrion_1',
        pov: 'Tryion Lanister',
        book: 'AGOT',
        chapter: 9,
        chapterTitle: "Tryion I",
        locationId: 'winterfell',
        summary: "Tyrion meets up with his nephew Joffrey and insists he pay his sympathies to the Starks, before joining his brother and sister for breakfast with news that Bran Stark will probably survive."
    },
    {
        id: 'agot_john_2',
        pov: 'John Snow',
        book: 'AGOT',
        chapter: 10,
        chapterTitle: "John II",
        locationId: 'winterfell',
        summary: "Jon says his last goodbyes, first to the comatose Bran, then to Robb, and finally to Arya, to whom he gives a Braavosi-type sword."
    },
]