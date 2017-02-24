const babel = require.resolve('babel-cli/bin/babel');

const babelPlugins = [
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-transform-es2015-spread',
    'babel-plugin-transform-es2015-function-name',
    'babel-plugin-transform-es2015-sticky-regex',
    'babel-plugin-transform-es2015-unicode-regex',
    'babel-plugin-transform-es2015-parameters',
    'babel-plugin-transform-es2015-destructuring',
    'babel-plugin-transform-es2015-modules-commonjs',
    'babel-plugin-transform-export-extensions',
].map((plugin) => require.resolve(plugin)).join(',');

const babelCommand = (extension, extra) => {
    const additional = extra ? ` ${extra}` : '';

    let preFix = /^win/.test(process.platform) ? 'node ' : '';
    return `${preFix}${babel} ${extension.path}/src --out-dir ${extension.path}/lib ` +
        ` --source-maps --plugins ${babelPlugins}${additional}`;
};

module.exports = (extensions, extra) =>
    extensions
        .map((extension) => babelCommand(extension, extra))
        .join(' & ');
