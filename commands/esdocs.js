const join = require('path').join;
const esdoc = join(__dirname, '..', 'node_modules', '.bin', 'esdoc');

const esdocConfig = require.resolve('../configuration/esdoc.js');

const esdocs = (packageName) => `cd packages/${packageName} && ${esdoc} -c ${esdocConfig}`;

module.exports = (name) => (`${esdocs(name)} & ${esdocs(name + '-dev')}`);
