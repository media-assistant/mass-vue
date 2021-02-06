import routes from 'vite-plugin-pages/client';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes
});