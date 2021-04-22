import { computed } from '@vue/runtime-core';
import { useFetch } from '../plugins/fetch';
import { getMovieIdUrl, RADARR_MOVIES } from '../plugins/fetch/routes/radarr';

import type { Movie } from '../types/radarr';

const {
    data,
    isFetching: loading,
    execute: fetchMovies,
} = useFetch<Movie[]>(RADARR_MOVIES, { immediate: false });

const movies = computed({
    get(): Movie[] {
        return data.value ? data.value : [];
    },
    set(value: Movie[]) {
        data.value = value;
    },
});

const deleteMovie = (movie: Movie): void => {
    useFetch(getMovieIdUrl(movie)).delete();

    movies.value = movies.value.filter(item => item.id === movie.id);
};




const use_movies = {
    movies,
    loading,
    fetchMovies,
    deleteMovie,
};

export const useMovies = (): typeof use_movies => {
    return use_movies;
};

export const useMovie = (idToFind: number): Movie | undefined => movies.value.find(({ id }) => {
    // FIXME: MirageJS returns strings as integers while the actual API returns a number. We're most likely better off moving away from MirageJS...
    if (typeof id === 'string') {
        return parseInt(id) === idToFind;
    }
    return id === idToFind;
});