module.exports = {
    'extends': require.resolve('eslint-config-vgno'),

    'parser': require.resolve('babel-eslint'),

    'env': {
        'es6': true
    },

    'ecmaFeatures': {
        'modules': true
    }
};
