const join = require('path').join;

const name = require(join(process.cwd(), 'package.json')).name;

module.exports = {
    roc: {
        name: 'roc-package-internal-dev',
        config: {
            commands: {
                'build': require('./commands/build')(name),
                'build:watch': require('./commands/build-watch')(name),
                'clean': require('./commands/clean')(name),
                'docs': require('./commands/docs')(name),
                'esdocs': require('./commands/esdocs')(name),
                'link': require('./commands/link')(name),
                'lint:alias': require('./commands/lint-alias')(name),
                'lint': require('./commands/lint')(name),
                'release': require('./commands/release')(name)
            }
        },
        meta: {
            commands: {
                'build': { description: 'Builds project' },
                'build:watch': { description: 'Builds project in watch mode' },
                'clean': { description: 'Cleans generated files' },
                'docs': { description: 'Generates markdown documentation' },
                'esdocs': { description: 'Generates ESDoc' },
                'link': { description: 'Links up the project' },
                'lint:alias': { description: 'Run local lint inside packages' },
                'lint': { description: 'Runs lint' },
                'release': { description: 'Run release script' }
            }
        }
    }
}
