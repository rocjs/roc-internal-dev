const fs = require('fs');

const roc = require('roc');
const toArray = require('roc/converters').toArray;

const extensions =
    !roc.folderExists(`${process.cwd()}/extensions`) ? [] :
    fs.readdirSync(`${process.cwd()}/extensions`)
        .map((extension) => {
            if (roc.fileExists(`${process.cwd()}/extensions/${extension}/package.json`)) {
                return {
                    folder: extension,
                    path: `${process.cwd()}/extensions/${extension}`,
                    name: require(`${process.cwd()}/extensions/${extension}/package.json`).name
                };
            }
            return undefined;
        })
        .filter((extension) => extension !== undefined);

module.exports = {
    build: {
        command: require('./build')(extensions),
        description: 'Builds project'
    },
    'build:watch': {
        command: require('./buildWatch')(extensions),
        description: 'Builds project in watch mode'
    },
    clean: {
        command: require('./clean')(extensions),
        description: 'Cleans generated files'
    },
    docs: {
        command: require('./docs')(extensions),
        description: 'Generates markdown documentation'
    },
    esdocs: {
        command: require('./esdocs')(extensions),
        description: 'Generates ESDoc'
    },
    link: {
        command: require('./link')(extensions),
        description: 'Links up the project',
        arguments: [{
            name: 'modules',
            description: 'Modules that should be linked into the extensions in extensions/',
            converter: toArray()
        }]
    },
    'lint:alias': {
        command: require('./lintAlias')(extensions),
        description: 'Run local lint inside packages'
    },
    lint: {
        command: require('./lint')(extensions),
        description: 'Runs lint'
    },
    release: {
        command: require('./release')(extensions),
        description: 'Run release script'
    },
    rnm: {
        command: require('./removeNodeModules')(extensions),
        description: 'Removes node_modules folders in extensions/'
    }
};
