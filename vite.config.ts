import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteESLint from '@ehutch79/vite-eslint';
import voie from 'vite-plugin-voie';
import { VitePWA } from 'vite-plugin-pwa'; 
import gzipPlugin from 'rollup-plugin-gzip';
import WindiCSS from 'vite-plugin-windicss';

// Uncomment to view bundles when running `npm run build`
// import analyze from 'rollup-plugin-analyzer';

export default defineConfig({
    plugins: [
        Vue(),
        ViteESLint(),
        voie(),
        // ...WindiCSS(),
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
        port: parseInt(process.env.APP_PORT),
        strictPort: true,
        host: 'host.docker.internal',
    },
    build: {
        rollupOptions: {
            plugins: [
                gzipPlugin(),
                // Uncomment to view bundles when running `npm run build`
                // analyze({summaryOnly: true}),
            ]
        }
    }
});
