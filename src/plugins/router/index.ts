import routes from 'voie-pages';
import { createRouter, createWebHistory } from 'vue-router';

console.log(routes);

export default createRouter({
    history: createWebHistory(),
    routes
});