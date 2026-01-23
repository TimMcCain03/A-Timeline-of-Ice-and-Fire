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
        id: 'agot_bran_1',
        pov: 'Bran Stark',
        book: 'AGOT',
        chapter: 1,
        locationId: 'winterfell',
        summary: 'idk yet'
    },
    {
        id: 'agot_bran_2',
        pov: 'Brandon Stark',
        book: 'AGOT',
        chapter: 2,
        locationId: 'kings_landing',
        summary: 'still idk yet'
    },
]