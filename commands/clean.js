const rimraf = require.resolve('rimraf/bin');

const clean = (packageName) => `${rimraf} packages/${packageName}/lib packages/${packageName}/esdocs`;

module.exports = (name) => `${clean(name)} & ${clean(name + '-dev')}`;
