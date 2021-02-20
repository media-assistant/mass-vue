import { createApp } from 'vue';
import router from './plugins/router';
import { useMirageJS } from './plugins/miragejs';

import 'windi.css';
import App from './App.vue';

if (import.meta.env.DEV && !import.meta.env.VITE_DISABLE_MOCKS) {
    useMirageJS();
}

createApp(App).use(router).mount('#app');
