import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteESLint from '@ehutch79/vite-eslint';

const port = parseInt(process.env.APP_PORT); 

export default defineConfig({
    plugins: [
        vue(),
        viteESLint(),
    ],
    server: {
        port: port,
        strictPort: true,
        host: 'host.docker.internal',
    },
});
