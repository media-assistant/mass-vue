import { createApp } from 'vue';
import App from './App.vue';
import { createServer } from 'miragejs';

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

createApp(App).mount('#app');
