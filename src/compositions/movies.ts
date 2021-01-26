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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const useMovies = () => {
    return {
        ...toRefs(store),
        fetchMovies,
    };
};