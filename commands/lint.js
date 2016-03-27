const eslint = require.resolve('eslint/bin/eslint');
const eslintConfig = require.resolve('../configuration/.eslintrc.js');

const eslintCommand = (package) =>
    `${eslint} --config ${eslintConfig} ${package.path}/src --no-ignore`;

module.exports = (packages, extra) => {
    return packages
        .map(eslintCommand)
        .join(' && ');
}
