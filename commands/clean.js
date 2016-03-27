const rimraf = require.resolve('rimraf/bin');

const clean = (package) => `${rimraf} ${package.path}/lib ${package.path}/esdocs`;

module.exports = (packages) => {
    return packages
        .map(clean)
        .join(' & ');
}
