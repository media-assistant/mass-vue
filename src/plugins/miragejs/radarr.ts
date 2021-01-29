import { Server } from 'miragejs';
import DbCollection from 'miragejs/db-collection';
import { RADARR_MOVIES } from '../../plugins/fetch/routes/radarr';

export const useRadarrRoutes = (server: Server): void => {
    server.get(RADARR_MOVIES, (schema): DbCollection => {
        return schema.db.movies;
    });
};