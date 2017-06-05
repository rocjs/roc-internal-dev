const executeSyncExit = require('roc').executeSyncExit;

const previous = [];

// We will link all previous with the next one, this might not be needed but we do it
// because it's easy and it does not really hurt in any way.
const linkPrevious = (name, yarn) => {
    const pkg = yarn ? 'yarn' : 'npm';

    const links = previous.map((prev) => `${pkg} link ${prev}`);
    previous.push(name);
    if (yarn) {
        links.push('yarn install');
    }
    links.push(`${pkg} link`);
    return links.join(' && ');
};

const linkExtra = (extra, yarn) => {
    if (extra.length === 0) {
        return '';
    }

    const pkg = yarn ? 'yarn' : 'npm';

    return ` && ${extra
      .map((dependency) => `${pkg} link ${dependency}`)
      .join(' && ')
    }`;
};

const link = (extension, extra, yarn) =>
    `cd ${extension.path}${linkExtra(extra, yarn)} && ${linkPrevious(extension.name, yarn)}`;

module.exports = (extensions) => (commandObject) => {
    const extra = commandObject.arguments.managed.modules || [];
    const yarn = commandObject.options.managed.yarn;
    executeSyncExit(
      extensions
        .map((extension) => link(extension, extra, yarn))
        .join(' && ')
    );
};
