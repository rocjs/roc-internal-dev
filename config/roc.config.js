const readdirSync = require('fs').readdirSync;
const fileExists = require('roc').fileExists;

const packages =
    readdirSync(`${process.cwd()}/packages`)
    .map((package) => {
        if (fileExists(`${process.cwd()}/packages/${package}/package.json`)) {
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
