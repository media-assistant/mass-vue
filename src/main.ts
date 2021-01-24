import { createApp } from 'vue';
import { createServer } from 'miragejs';
import routes from 'vite-plugin-pages/client';
import { createRouter, createWebHistory } from 'vue-router';

import './index.css';
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes
});

if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    createServer({
        environment: 'development',

        routes() {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.namespace = 'api';

            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
            this.get('/radarr/movies', () => {
                return [
                    { id: 1, name: 'Inception', year: 2010 },
                    { id: 2, name: 'Interstellar', year: 2014 },
                    { id: 3, name: 'Dunkirk', year: 2017 },
                    { id: 4, name: 'Tenet', year: 2020 }
                ];
            });
        }
    });
}

createApp(App).use(router).mount('#app');
