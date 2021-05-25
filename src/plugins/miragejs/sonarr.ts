import { Server } from 'miragejs';
import DbCollection from 'miragejs/db-collection';
import { SONARR_SERIES } from '../../plugins/fetch/routes/sonarr';

export const useSonarrRoutes = (server: Server): void => {
    server.get(SONARR_SERIES, (schema): DbCollection => {
        return schema.db.shows;
    });
};