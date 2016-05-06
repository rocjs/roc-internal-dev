const toArray = require('roc/converters').toArray;

module.exports = {
    commands: {
        'build': { description: 'Builds project' },
        'build:watch': { description: 'Builds project in watch mode' },
        'clean': { description: 'Cleans generated files' },
        'docs': { description: 'Generates markdown documentation' },
        'esdocs': { description: 'Generates ESDoc' },
        'link': { description: 'Links up the project', arguments: [{
          name: 'packages',
          description: 'Modules that should be linked into the packages in packages/',
          converter: toArray
        }] },
        'lint:alias': { description: 'Run local lint inside packages (Not plugin)' },
        'lint': { description: 'Runs lint' },
        'release': { description: 'Run release script' }
    }
};
