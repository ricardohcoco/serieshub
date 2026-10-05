export type SerieDetailsType = {
    id: number;
    name: string;
    poster_path: string | null;
    genres: {
        id: number;
        name: string;
    }[];
    tagline: string;
    overview: string;
    vote_average: number;
}