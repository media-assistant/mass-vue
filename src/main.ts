import { createApp } from 'vue';
import router from './plugins/router';
import { useMirageJS } from './plugins/miragejs';

import 'windi.css';
import App from './App.vue';

if (process.env.NODE_ENV === 'development') {
    useMirageJS();
}

createApp(App).use(router).mount('#app');
