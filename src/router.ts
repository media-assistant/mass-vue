import { createRouter, createWebHistory } from 'vue-router';

import About from './pages/About.vue';
import Home from './pages/Home.vue';

// TODO: Auto-generate this array by using https://github.com/ktsn/vue-cli-plugin-auto-routing?
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});