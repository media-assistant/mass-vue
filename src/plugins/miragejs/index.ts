import { createServer, Model } from 'miragejs';
import * as db_data from '@/plugins/miragejs/db.json';
import { useRadarrRoutes } from '@/plugins/miragejs/radarr';
import { useSessionRoutes } from '@/plugins/miragejs/mass-api';

// Workaround for types: https://github.com/miragejs/miragejs/issues/720
const mock_models = {
    users: Model,
    movies: Model
};

const mock_factories = {
};

export const useMirageJS = (): void => {
    createServer<typeof mock_models, typeof mock_factories>({
        environment: 'development',
        namespace: 'api',
        models: mock_models,
        seeds(server) {
            server.db.loadData(db_data);
        },
        routes() {
            useSessionRoutes(this);
            useRadarrRoutes(this);
        }
    });

};