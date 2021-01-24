import { createServer } from 'miragejs';
import * as db_data from './db.json';
import { useRadarrRoutes } from './routes/radarr';

export const useMirageJS = (): void => {
    createServer({
        environment: 'development',
        namespace: 'api',
        seeds(server) {
            server.db.loadData(db_data);
        },
        routes() {
            useRadarrRoutes(this);
        }
    });

};