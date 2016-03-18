const eslint = require.resolve('eslint/bin/eslint');
const eslintConfig = require.resolve('../configuration/.eslintrc.js');

const eslintCommand = (packageName) =>
    `${eslint} --config ${eslintConfig} packages/${packageName}/src --no-ignore`;

module.exports = (name) => `${eslintCommand(name)} && ${eslintCommand(name + '-dev')}`;
