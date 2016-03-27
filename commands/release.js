// Based on release script by Michael Jackson - @mjackson
const resolvePath = require('path').resolve;
const readFileSync = require('fs').readFileSync;
const prompt = require('readline-sync').question;
const execSync = require('roc').executeSync;

module.exports = (packages) => () => {
    const firstPackagePath = packages[0].path;

    // Will base the version number on the first package
    const getVersion = () =>
        JSON.parse(readFileSync(resolvePath(firstPackagePath, 'package.json'))).version;

    // Get the next version, which may be specified as a semver version number or anything `npm version` recognizes. This
    // is a "pre-release" if nextVersion is premajor, preminor, prepatch, or prerelease
    const nextVersion = prompt(`Next version (current version is ${getVersion()})? `);
    const isPrerelease = nextVersion.substring(0, 3) === 'pre';

    // 1) Make sure the build passes
    execSync(require('./build')(packages));

    // 2) Make sure the tests pass (Currently only lint)
    execSync(require('./lint')(packages));

    // 3) Increment the package version in package.json for all projects
    packages.forEach((package) =>
        execSync(`cd ${package.path} && npm version ${nextVersion} --no-git-tag-version`));

    // 4) Read the version from main package
    const newVersion = require(resolvePath(firstPackagePath, 'package.json')).version;

    // 5) Create a new commit
    // 6) Create a v* tag that points to that commit
    execSync(`git add . && git commit -m "Version ${newVersion}" && git tag v${newVersion}`);

    // 7) Push to GitHub master. Do this before we publish in case anyone has pushed to GitHub since we last pulled
    execSync('git push origin master');

    // 8) Publish to npm. Use the "next" tag for pre-releases, "latest" for all others
    packages.forEach((package) =>
        execSync(`cd ${package.path} && npm publish --tag ${isPrerelease ? 'next' : 'latest'}`));

    // 9) Push the v* tag to GitHub
    execSync(`git push -f origin v${newVersion}`);

    // 10) Push the "latest" tag to GitHub
    if (!isPrerelease) {
        execSync('git tag -f latest');
        execSync('git push -f origin latest');
    }
}
