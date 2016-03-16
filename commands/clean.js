const join = require('path').join;
const rimraf = join(__dirname, '..', 'node_modules', '.bin', 'rimraf');

const clean = (packageName) => `${rimraf} packages/${packageName}/lib packages/${packageName}/esdocs`;

module.exports = (name) => `${clean(name)} & ${clean(name + '-dev')}`;
