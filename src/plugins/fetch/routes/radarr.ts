import type { Movie } from '../../../types/radarr';

export const RADARR_MOVIES = '/radarr/movie';

export const getMovieIdUrl = (movie: Movie): string => `${RADARR_MOVIES}/${movie.id}`;
