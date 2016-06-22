module.exports = {
    extends: require.resolve('eslint-config-airbnb-base'),

    parser: require.resolve('babel-eslint'),

    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        'comma-dangle': [2, 'never'],
        'max-len': [2, 120, 4],

        'import/order': [2, {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always'
        }],
        'import/newline-after-import': [2]
    }
};
