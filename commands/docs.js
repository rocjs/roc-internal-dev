const chalk = require('chalk');
const roc = require('roc');
const log = require('roc/log/default/small');

module.exports = (extensions) => () =>
    extensions.reduce((promise, extension) =>
        promise.then(() => {
            log.info(`Generating documentation for ${chalk.cyan(extension.name)}`);
            return roc.generateDocumentation({
                rocCommandObject: {
                    context: roc.getContext(extension.path, undefined, false),
                    directory: extension.path,
                },
                extension: true,
            });
        }), Promise.resolve())
    .then(() => log.done('\nDocumentation created for all extensions!'))
    .catch((err) => {
        log.error('An error happened when generating documentation', err);
    });
