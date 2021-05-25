import type { Movie } from '../types/radarr';
import type { Show } from '../types/sonarr';

const isMovie = (item: Show|Movie): boolean => {
    return 'tmdb_id' in item;
};

const itemLink = (item: Show|Movie): string => {
    return `/${isMovie(item) ? 'movies' : 'series'}/${item.id}`;
};

const use_item = {
    isMovie,
    itemLink,
};

export const useItem = (): typeof use_item => {
    return use_item;
};