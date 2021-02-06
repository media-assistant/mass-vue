import { createApp } from 'vue';
import { useMirageJS } from './plugins/miragejs';

import './index.css';
import App from './App.vue';
import router from './plugins/router';

if (Number(import.meta.env.VITE_MIRAGE_ENABLED)) {
    useMirageJS();
}

createApp(App).use(router).mount('#app');
