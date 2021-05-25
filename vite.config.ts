import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteESLint from '@ehutch79/vite-eslint';
import Pages from 'vite-plugin-pages';
import { VitePWA } from 'vite-plugin-pwa'; 
import gzipPlugin from 'rollup-plugin-gzip';
import WindiCSS from 'vite-plugin-windicss';
// import analyze from 'rollup-plugin-analyzer';

export default defineConfig({
    plugins: [
        Vue(),
        ViteESLint(
            // fixme does not work in prod but should?
            // {
            //     fix: import.meta.env.DEV,
            // }
        ),
        Pages(),
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
        WindiCSS()
    ],
    server: {
        port: 3000,
        strictPort: true,
        host: process.env.SERVER_HOST,
    },
    build: {
        rollupOptions: {
            plugins: [
                gzipPlugin(),
                // analyze({summaryOnly: true}),
            ],
        }
    }
});
