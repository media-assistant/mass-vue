import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteESLint from '@ehutch79/vite-eslint';

export default defineConfig({
    plugins: [
        vue(),
        viteESLint(),
    ],
    server: {
        port: 443,
        strictPort: true,
        host: 'host.docker.internal',
    },
});
