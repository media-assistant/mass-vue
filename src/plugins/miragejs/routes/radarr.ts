import { Server } from 'miragejs';
import DbCollection from 'miragejs/db-collection';

export const RADARR_MOVIES = '/radarr/movies';

export const useRadarrRoutes = (server: Server): void => {
    server.get(RADARR_MOVIES, (schema): DbCollection => {
        return schema.db.movies;
    });
};