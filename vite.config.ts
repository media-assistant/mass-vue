import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteESLint from '@ehutch79/vite-eslint';
import Pages from 'vite-plugin-pages';
import { VitePWA } from 'vite-plugin-pwa';

const port = parseInt(process.env.APP_PORT); 

export default defineConfig({
    plugins: [
        Vue(),
        ViteESLint(),
        Pages({
            // Load index page sync and bundled with the landing page to improve first loading time:
            importMode(path: string) {
                return path === '/src/pages/index.vue' ? 'sync' : 'async'
            },
            extensions: ['vue'],
        }),
        VitePWA({
            manifest: {
                name: 'Media Assistant',
                short_name: 'Media Assistant',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: '/assets/images/logo.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/assets/images/logo.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
    server: {
        port: port,
        strictPort: true,
        host: 'host.docker.internal',
    },
});
