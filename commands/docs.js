const chalk = require('chalk');
const roc = require('roc');
const log = require('roc/log/default/small');

module.exports = (extensions) => () =>
    extensions.reduce((promise, extension) =>
        promise.then(() => {
            log.info(`Generating documentation for ${chalk.cyan(extension.name)}`);
            return roc.getContext(extension.path).then((rocCommandObject) =>
                roc.generateDocumentation({
                    rocCommandObject: Object.assign({}, rocCommandObject, { directory: extension.path }),
                    extension: true
                })
            );
        }), Promise.resolve())
    .then(() => log.done('Completed!'))
    .catch((err) => {
        log.error('An error happened when generating documentation', err);
    });
