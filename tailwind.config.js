module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
            content: [
            './index.html',
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.ts',
        ],
    },
    darkMode: 'media',
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
