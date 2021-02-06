import { reactive, toRefs } from 'vue';
import { get } from '../plugins/fetch';
import { RADARR_MOVIES } from '../plugins/fetch/routes/radarr';

import type { Movie } from '../types/radarr';

const store = reactive({
    movies: [] as Movie[],
    loading: false,
});

const fetchMovies = async (): Promise<void> => {
    store.loading = true;
    store.movies = await get<Movie[]>(RADARR_MOVIES);
    store.loading = false;
};

const use_movies = {
    ...toRefs(store),
    fetchMovies,
};

export const useMovies = (): typeof use_movies => {
    return use_movies;
};

export const useMovie = (idToFind: number): Movie | undefined => store.movies.find(({ id }) => {
    // FIXME: MirageJS returns strings as integers while the actual API returns a number. We're most likely better off moving away from MirageJS...
    if (typeof id === 'string') {
        return parseInt(id) === idToFind;
    }
    return id === idToFind;
});