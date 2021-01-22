import { createApp } from 'vue';
import { createServer } from 'miragejs';

import './index.css';
import App from './App.vue';
import { router } from './router';

if (process.env.NODE_ENV === 'development') {
  createServer({
    environment: 'development',

    routes() {
      this.namespace = 'api';

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
