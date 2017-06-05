const semver = require('semver');
const executeSyncExit = require('roc').executeSyncExit;

const previous = [];

// We will link all previous with the next one, this might not be needed but we do it
// because it's easy and it does not really hurt in any way.
const linkPrevious = (extension, yarn, useInstall) => {
    const pkg = yarn ? 'yarn' : 'npm';

    const operation = useInstall ? 'install' : 'link';
    const links = previous
      .map((prev) => `${pkg} ${operation} ${useInstall ? prev.path : prev.name}`);
    previous.push(extension);
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

const link = (extension, extra, yarn, useInstall) =>
    `cd ${extension.path}${linkExtra(extra, yarn)} && ${linkPrevious(extension, yarn, useInstall)}`;

module.exports = (extensions) => (commandObject) => {
    const extra = commandObject.arguments.managed.modules || [];
    const yarn = commandObject.options.managed.yarn;

    // We want to use "npm install" over "npm link" when running with npm 5+
    // This since the behaviour seems to have changed when using "link" and
    // in general direct install seems to be the recommended way for monorepos
    // We only want to do this when using npm, not when using yarn
    const useInstall = semver.satisfies(
        executeSyncExit('npm -v', { silent: true }),
        '>=5'
    ) && !yarn;

    executeSyncExit(
      extensions
        .map((extension) => link(extension, extra, yarn, useInstall))
        .join(' && ')
    );
};
