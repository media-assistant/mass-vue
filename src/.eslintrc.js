module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-trailing-spaces': [process.env.NODE_ENV === 'production' ? 'error' : 'warn'],
        'camelcase': 'off',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-multi-spaces': ['error'],
        'keyword-spacing': ['error'],
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
        'vue/eqeqeq': ['error'],
        'vue/arrow-spacing': ['error'],
        'vue/no-deprecated-scope-attribute': ['error'],
        'vue/require-prop-types': ['error'],
        'vue/require-default-prop': ['error'],
        'vue/prop-name-casing': ['error', 'snake_case'],
        'vue/order-in-components': ['error'],
        'vue/component-tags-order': ['error', {
            'order': [ 'template', 'style', 'script' ]
        }],
        'no-empty-function': ['error'],
        'no-else-return': ['error'],
        'no-eval': ['error'],
        'no-var': ['error'],
        'no-alert': ['error'],

        'vue/no-multiple-template-root': ['off'],
        '@typescript-eslint/camelcase': ['off'],
        '@typescript-eslint/no-unused-vars': ['off'],
    }
};
