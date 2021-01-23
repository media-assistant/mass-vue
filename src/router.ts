import { createRouter, createWebHistory } from 'vue-router';

import About from './pages/About.vue';
import Home from './pages/Home.vue';

// TODO: Auto-generate this array by using https://github.com/ktsn/vue-cli-plugin-auto-routing?
const routes = [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    { path: '/', component: Home },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    { path: '/about', component: About },
];

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const router = createRouter({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    history: createWebHistory(),
    routes,
});