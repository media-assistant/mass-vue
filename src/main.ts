import { createApp } from 'vue';
import App from './App.vue';
import './css/index.css';

if (process.env.NODE_ENV === 'development') {
  // TODO: Create MirageJS server
}

createApp(App).mount('#app');
