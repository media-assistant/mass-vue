export type Movie = {
    id: number;
    name: string; // FIXME: Should be title
    overview: string;
    poster: string;
    runtime: number;
    year: number;
    youTubeTrailerId: string;
};