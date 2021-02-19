import { createApp } from 'vue';
import router from './plugins/router';
import { useMirageJS } from './plugins/miragejs';

import 'windi.css';
import App from './App.vue';

if (Number(import.meta.env.VITE_MIRAGE_ENABLED)) {
    useMirageJS();
}

createApp(App).use(router).mount('#app');
