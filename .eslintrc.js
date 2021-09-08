module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
        REWARD_API: true,
        PATH_DOMAIN: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: {
            legacyDecorators: true
        }
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'off',
        'no-useless-escape': 'off'
    }
};
