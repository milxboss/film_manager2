export interface MovieCompType{
    id: number;
    title: string;
    genre: string;
    year: number;
    description: string;
    rating: number;
    addFavorite: (id: number) => void;
};

export type MovieType = Omit<MovieCompType, 'addFavorite'>;