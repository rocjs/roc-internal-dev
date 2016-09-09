const chalk = require('chalk');
const buildContext = require('roc/lib/context/buildContext').default;
const generateDocumentation = require('roc/lib/documentation/markdown/generateDocumentation').default;
const log = require('roc/log/default/small');

module.exports = (extensions) => () =>
    extensions.reduce((promise, extension) =>
        promise.then(() => {
            log.log(`Generating documentation for ${chalk.cyan(extension.name)}`);
            return generateDocumentation({
                commandObject: {
                    context: buildContext(extension.path, undefined, false),
                    directory: extension.path,
                },
                extension: true,
            });
        }), Promise.resolve())
    .then(() => log.success('Documentation created for all extensions!'))
    .catch((err) => {
        log.error('An error happened when generating documentation', err);
    });
