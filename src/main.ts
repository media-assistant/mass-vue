import { createApp } from 'vue';
import routes from 'vite-plugin-pages/client';
import { createRouter, createWebHistory } from 'vue-router';
import { useMirageJS } from '@/plugins/miragejs';

import '@/index.css';
import App from '@/App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes
});

if (process.env.NODE_ENV === 'development') {
    useMirageJS();
}

createApp(App).use(router).mount('#app');
