const babel = require.resolve('babel-cli/bin/babel');

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

const babelCommand = (package, extra) => {
    extra = extra ? ' ' + extra : '';
    return `${babel} ${package.path}/src --out-dir ${package.path}/lib --source-maps --plugins ${babelPlugins}${extra}`;
}

module.exports = (packages, extra) => {
    return packages
        .map((package) => babelCommand(package, extra))
        .join(' & ');
}
