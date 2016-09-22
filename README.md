# roc-internal-dev [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

Internal tool for building Roc extensions.

## How to use
Add this module as a dev dependency to the Roc extension that you want to manage. Then you can connect npm scripts to the commands that this module exposes.

You can use the short name `rid` as an alternative to `roc-internal-dev` if you don't want to write out the entire name.

```js
"scripts": {
    "build": "rid build",
    // ...
}
```

### Tip
A useful tip is to add an alias to rid that makes it easier to work with in the project.

```js
"scripts": {
    "start": "rid",
    // ...
}
```

It is then possible to run all possible commands using `npm start <command>`.

## Get correct documentation
It is important to add the extension itself to the `package.json` for `roc-internal-dev` to be able to generate documentation.

__Example__
```json
{
  "name": "roc-package-module",
  ...
  "roc": {
    "packages": [
      "./lib/index.js"
    ]
  }
}
```

## Available Commands
[Please see here for all of the commands](/docs/Commands.md).

# Changelog
## 2.0.2
- Fixed a bug in the release command.
- Added `--next` flag to be used with `release` command.

## 2.0.1
- Added missing `bin/` folder when publishing to npm.

## 2.0.0
- Updated to work with the latest version of `roc`.
- Now uses `extensions/` instead of `packages/` for the extensions.
- Changed from running `lint-alias` to `lint` on release by default and added option to use alias with `--use-alias`.
- Updated to use ESLint 3.0.
- Added new command, `rnm`, for removing `node_modules` in extensions directory.

## 1.3.2
- Fixed regression from the previous release.

## 1.3.1
- Added a way to link additional modules when running the `link` command, see `rid link -h` for more info.

## 1.3.0
- This release was botched, see 1.3.1 instead.

## 1.2.1
- Now uses `lint-alias` instead of `alias` when doing the release.

## 1.2.0
- Now generates new documentation when creating a new release.

## 1.1.2
- Solved a bug in the release script.

## 1.1.1
- Made a correct reference to getConfiguration from `roc`.

## 1.1.0
- More generic way to handle extensions, brings support for plugins.
- New better way to generate documentation.

## 1.0.0
- Initial version

[build-badge]: https://img.shields.io/travis/rocjs/roc-internal-dev/master.svg?style=flat-square
[build]: https://travis-ci.org/rocjs/roc-internal-dev

[npm-badge]: https://img.shields.io/npm/v/@rocjs/roc-internal-dev.svg?style=flat-square
[npm]: https://www.npmjs.org/package/@rocjs/roc-internal-dev
