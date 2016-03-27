const previous = [];

const link = (package) => `cd ${package.path} && ${linkPrevious(package.name)}`;

// We will link all previous with the next one, this might not be needed but we do it
// because it's easy and it does not really hurt in any way.
const linkPrevious = (name) => {
    const links = previous.map((prev) => `npm link ${prev}`);
    previous.push(name);
    links.push('npm link');
    return links.join(' && ');
}

module.exports = (packages) => {
    return packages
        .map(link)
        .join(' && ');
}
