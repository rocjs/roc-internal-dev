# roc-internal-dev

Internal tool for building Roc packages.

## How to use
Add this package as a dev dependency to the Roc package that you want to manage. Then you can connect npm scripts to the commands that this package exposes.

You can use the short name `rid` if you don't want to write out the entire name.

```js
"scripts": {
    "build": "rid build",
    // ...
}
```

## Commands
[Please see here for all of the commands](/docs/Commands.md).

## Future
We should create a template that can be used to quickly create new packages/plugins.

# Changelog
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
