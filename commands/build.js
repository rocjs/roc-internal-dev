const join = require('path').join;
const babel = join(__dirname, '..', 'node_modules', '.bin', 'babel');

const babelPlugins = [
    require.resolve('babel-plugin-transform-object-rest-spread'),
    require.resolve('babel-plugin-transform-es2015-spread'),
    require.resolve('babel-plugin-transform-es2015-function-name'),
    require.resolve('babel-plugin-transform-es2015-sticky-regex'),
    require.resolve('babel-plugin-transform-es2015-unicode-regex'),
    require.resolve('babel-plugin-transform-es2015-parameters'),
    require.resolve('babel-plugin-transform-es2015-destructuring'),
    require.resolve('babel-plugin-transform-es2015-modules-commonjs'),
    require.resolve('babel-plugin-transform-export-extensions'),
].join(',');

const babelCommand = (packageName, extra) => {
    extra = extra ? ' ' + extra : '';
    return `${babel} packages/${packageName}/src --out-dir packages/${packageName}/lib --source-maps --plugins ${babelPlugins}${extra}`;
}

module.exports = (name, extra) => `${babelCommand(name, extra)} & ${babelCommand(name + '-dev', extra)}`;
