const fs = require('fs');
const roc = require('roc');

const folderExists = (path) => {
    path = roc.getAbsolutePath(path);
    try {
        return fs.statSync(path).isDirectory();
    } catch (error) {
        return false;
    }
};

const packages =
    !folderExists(`${process.cwd()}/packages`) ? [] :
    fs.readdirSync(`${process.cwd()}/packages`)
    .map((package) => {
        if (roc.fileExists(`${process.cwd()}/packages/${package}/package.json`)) {
            return {
                folder: package,
                path: `${process.cwd()}/packages/${package}`,
                name: require(`${process.cwd()}/packages/${package}/package.json`).name
            }
        }
    })
    .filter((package) => package !== undefined);

module.exports = {
    commands: {
        'build': require('../commands/build')(packages),
        'build:watch': require('../commands/build-watch')(packages),
        'clean': require('../commands/clean')(packages),
        'docs': require('../commands/docs')(packages),
        'esdocs': require('../commands/esdocs')(packages),
        'link': require('../commands/link')(packages),
        'lint:alias': require('../commands/lint-alias')(packages),
        'lint': require('../commands/lint')(packages),
        'release': require('../commands/release')(packages)
    }
};
