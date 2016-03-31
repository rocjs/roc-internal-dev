const writeFile = require('fs').writeFile;
const join = require('path').join;

const toHide0 = Object.keys(require('roc').roc.config.commands);
const toHide = Object.keys(require('roc').roc.config.commands).join(',');
const toHide2 = Object.keys(require('../config/roc.config.meta.js').commands);

const getConfiguration = require('roc').getConfiguration;

const rocPackage = require('roc');

const settingsDocs =
    'node bin/index.js markdown-settings > ./docs/Settings.md';
const commandsDocs =
    `node bin/index.js markdown-commands --hide-commands ${toHide} /dev/docs/Settings.md > ./docs/Commands.md`;
const hooksDocs =
    'node bin/index.js markdown-hooks > ./docs/Hooks.md';
const actionsDocs =
    'node bin/index.js markdown-actions > ./docs/Actions.md';

const generateDocumentation = (path) =>
    `cd ${path} && ${settingsDocs} && ${commandsDocs} && ${hooksDocs} && ${actionsDocs}`;

const writeFilePromise = (file) => {
    return new Promise((resolve, reject) => {
        writeFile(file.path, file.content, (err) => {
            if (err) {
                return reject(err);
            }

            return resolve();
        });
    });
}

module.exports = (packages) => () => {
    return Promise.all(packages.map((package) => {
        const rocCommandObject = getConfiguration(package.path);

        return Promise.all([
            {
                content: rocPackage.generateMarkdownActions(package.name, rocCommandObject.actions),
                path: `${package.path}/docs/Actions.md`
            }, {
                content: rocPackage.generateMarkdownHooks(package.name, rocCommandObject.hooks),
                path: `${package.path}/docs/Hooks.md`
            }, {
                content: rocPackage.generateMarkdownDocumentation(package.name, rocCommandObject.packageConfig, rocCommandObject.metaObject),
                path: `${package.path}/docs/Settings.md`
            }, {
                content: rocPackage.generateMarkdownCommands(
                    package.name,
                    rocCommandObject.packageConfig,
                    rocCommandObject.metaObject,
                    `/packages/${package.folder}/docs/Settings.md`
                ),
                path: `${package.path}/docs/Commands.md`
            }
        ].map(writeFilePromise));
    })).then(() => console.log('Done'))
    .catch((err) => {
        console.log('An error happened', err)
        process.exit(1);
    });
};
