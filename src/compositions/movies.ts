import { reactive, toRefs } from 'vue';
import { get, del } from '../plugins/fetch';
import { getMovieIdUrl, RADARR_MOVIES } from '../plugins/fetch/routes/radarr';

import type { Movie } from '../types/radarr';

const state = reactive({
    movies: [] as Movie[],
    loading: false,
});

const fetchMovies = async (): Promise<void> => {
    state.loading = true;

    state.movies = await get<Movie[]>(RADARR_MOVIES);

    state.loading = false;
};

const deleteMovie = async (movie: Movie): Promise<void> => {
    await del(getMovieIdUrl(movie));

    state.movies = state.movies.filter(item => item.id === movie.id);
};

const use_movies = {
    ...toRefs(state),
    fetchMovies,
    deleteMovie,
};

export const useMovies = (): typeof use_movies => {
    return use_movies;
};

export const useMovie = (idToFind: number): Movie | undefined => state.movies.find(({ id }) => {
    // FIXME: MirageJS returns strings as integers while the actual API returns a number. We're most likely better off moving away from MirageJS...
    if (typeof id === 'string') {
        return parseInt(id) === idToFind;
    }
    return id === idToFind;
});