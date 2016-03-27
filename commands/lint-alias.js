var first = true;

const lint = (package) => `cd ${package.path}/ && npm run lint`;

module.exports = (packages) => {
    return packages
        .map(lint)
        .join(' && ');
}
