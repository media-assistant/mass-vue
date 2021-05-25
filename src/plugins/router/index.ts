import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import routes from 'virtual:generated-pages'; // @fixme VSCode error but works?

export default createRouter({
    history: createWebHistory(),
    routes: routes as RouteRecordRaw[],
});