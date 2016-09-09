const executeSyncExit = require('roc').executeSyncExit;

const previous = [];

// We will link all previous with the next one, this might not be needed but we do it
// because it's easy and it does not really hurt in any way.
const linkPrevious = (name) => {
    const links = previous.map((prev) => `npm link ${prev}`);
    previous.push(name);
    links.push('npm link');
    return links.join(' && ');
};

const linkExtra = (extra) => {
    if (extra.length === 0) {
        // Noop in bash
        return ':';
    }

    return extra
      .map((dependency) => `npm link ${dependency}`)
      .join(' && ');
};

const link = (extension, extra) => `cd ${extension.path} && ${linkExtra(extra)} && ${linkPrevious(extension.name)}`;

module.exports = (extensions) => (commandObject) => {
    const extra = commandObject.arguments.managed.modules || [];
    executeSyncExit(
      extensions
        .map((extension) => link(extension, extra))
        .join(' && ')
    );
};
