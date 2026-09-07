export interface FilmIf2 {
    "id": number;
    "title": string;
    "genre": string;
    "year": number;
    "description": string;
    "rating": number,
    'addFav': (id: number) => void
}

export type FilmIf = Omit<FilmIf2, 'addFav'>;