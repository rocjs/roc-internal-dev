const rimraf = require.resolve('rimraf/bin');

const clean = (extension) => {
    const preFix = /^win/.test(process.platform) ? 'node ' : '';
    return `${preFix}${rimraf} ${extension.path}/lib ${extension.path}/esdocs`;
};

module.exports = (extensions) =>
    extensions
        .map(clean)
        .join(' & ');
