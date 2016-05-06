const execSync = require('roc').executeSync;

const previous = [];

const link = (package, extra) => `cd ${package.path} && ${linkExtra(extra)} && ${linkPrevious(package.name)}`;

// We will link all previous with the next one, this might not be needed but we do it
// because it's easy and it does not really hurt in any way.
const linkPrevious = (name) => {
    const links = previous.map((prev) => `npm link ${prev}`);
    previous.push(name);
    links.push('npm link');
    return links.join(' && ');
}

const linkExtra = (extra) => {
    if (extra.length === 0) {
        // Noop in bash
        return ':';
    }

    return extra
      .map((dependency) => `npm link ${dependency}`)
      .join(' && ');
}

module.exports = (packages) => (rocCommandObject) => {
  const extra = rocCommandObject.parsedArguments.arguments.packages || [];
    execSync(
      packages
        .map((package) => link(package, extra))
        .join(' && ')
    );
}
