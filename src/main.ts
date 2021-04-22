import { createApp } from 'vue';
import router from './plugins/router';
import { useMirageJS } from './plugins/miragejs';

if (import.meta.env.DEV && !import.meta.env.VITE_DISABLE_MOCKS) {
    useMirageJS();
}

import 'windi.css';
import App from './App.vue';

createApp(App).use(router).mount('#app');
