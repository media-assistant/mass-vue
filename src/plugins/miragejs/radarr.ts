import { Server } from 'miragejs';
import { RADARR_MOVIES } from '@/plugins/fetch/routes/radarr';
import { Movie } from '@/types/radarr';

export const useRadarrRoutes = (server: Server): void => {
    server.get(RADARR_MOVIES, (schema): Movie[] => {
        return schema.db.movies.all() as Movie[];
    });
};