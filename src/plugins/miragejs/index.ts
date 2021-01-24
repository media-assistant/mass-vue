import { createServer } from 'miragejs';
import DbCollection from 'miragejs/db-collection';
import * as db_data from './db.json';

export const useMirageJS = (): void => {
    createServer({
        environment: 'development',
        namespace: 'api',
        seeds(server) {
            server.db.loadData(db_data);
        },
        routes() {
            this.namespace = 'api';

            this.get('/radarr/movies', (schema): DbCollection => {
                return schema.db.movies;
            });
        }
    });

};