export declare class TvShow {
    constructor(partial: Partial<TvShow>);
    id: number;
    name: string;
    get slug(): string;
    genres: string[];
    rating: {
        average: number;
    };
    image: {
        medium: string;
    };
}
