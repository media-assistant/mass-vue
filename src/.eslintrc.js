module.exports = {
    root: true,
    env: {
        node: true
    },
    ignorePatterns: ['.eslintrc.js'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        project: `./tsconfig.json`
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        // Eslint rules
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-trailing-spaces': [process.env.NODE_ENV === 'production' ? 'error' : 'warn'],
        'camelcase': 'off',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-multi-spaces': ['error'],
        'keyword-spacing': ['error'],
        'no-empty-function': ['error'],
        'no-else-return': ['error'],
        'no-eval': ['error'],
        'no-var': ['error'],
        'no-alert': ['error'],
        'indent': ['error', 4],

        // Vue Rules
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
        'vue/no-multiple-template-root': ['off'],

        // Typescript Rules
        '@typescript-eslint/camelcase': ['off'],
        '@typescript-eslint/no-unused-vars': ['off'], // Handled by tsconfig noUnusedLocals
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    }
};
