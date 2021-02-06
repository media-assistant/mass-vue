import { createServer, Model } from 'miragejs';
import * as db_data from './db.json';
import { useRadarrRoutes } from './radarr';
import { useSessionRoutes } from './mass-api';
import { api_url } from '../fetch';

// Workaround for types: https://github.com/miragejs/miragejs/issues/720
const models = {
    users: Model,
    movies: Model,
    tokens: Model,
};

const factories = { };

export const useMirageJS = (): void => {
    createServer<typeof models, typeof factories>({
        urlPrefix: api_url,
        environment: 'development',
        namespace: 'api',
        models: models,
        factories: factories,
        seeds(server) {
            server.db.loadData(db_data);
        },
        routes() {
            useSessionRoutes(this);
            useRadarrRoutes(this);
        }
    });

};