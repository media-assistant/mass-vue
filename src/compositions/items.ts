import type { Movie } from '../types/radarr';
import type { Show } from '../types/sonarr';

const isMovie = (item: Show|Movie): boolean => {
    return 'tmdb_id' in item;
};

const use_item = {
    isMovie,
};

export const useItem = (): typeof use_item => {
    return use_item;
};