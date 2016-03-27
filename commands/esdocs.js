const esdoc = require.resolve('esdoc/out/src/ESDocCLI.js');

const esdocConfig = require.resolve('../configuration/esdoc.js');

const esdocs = (package) => `cd ${package.path} && ${esdoc} -c ${esdocConfig}`;

module.exports = (packages) => {
    return packages
        .map(esdocs)
        .join(' & ');
}
