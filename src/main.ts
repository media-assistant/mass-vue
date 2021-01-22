import { createApp } from 'vue';
import App from './App.vue';

if (process.env.NODE_ENV === 'development') {
  // TODO: Create MirageJS server
}

createApp(App).mount('#app');
