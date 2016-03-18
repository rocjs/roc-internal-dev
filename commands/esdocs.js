const esdoc = require.resolve('esdoc/out/src/ESDocCLI.js');

const esdocConfig = require.resolve('../configuration/esdoc.js');

const esdocs = (packageName) => `cd packages/${packageName} && ${esdoc} -c ${esdocConfig}`;

module.exports = (name) => (`${esdocs(name)} & ${esdocs(name + '-dev')}`);
