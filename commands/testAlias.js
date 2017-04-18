const test = (extension) => `cd ${extension.path}/ && npm run test`;

module.exports = (extensions) =>
    extensions
        .map(test)
        .join(' && ');
