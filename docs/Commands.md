# Commands for `roc-internal-dev`

## General Information
All commands can be called with some additional options as can be seen below.

### General options

| Name            | Description                                                                                                   | Required |
| --------------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| -c, --config    | Path to configuration file, will default to roc.config.js in current working directory.                       | No       |
| -d, --directory | Path to working directory, will default to the current working directory. Can be either absolute or relative. | No       |
| -h, --help      | Output usage information.                                                                                     | No       |
| -V, --verbose   | Enable verbose mode.                                                                                          | No       |
| -v, --version   | Output version number.                                                                                        | No       |

## Commands
* [build](#build)
* [build:watch](#build:watch)
* [clean](#clean)
* [docs](#docs)
* [esdocs](#esdocs)
* [link](#link)
* [lint](#lint)
* [lint:alias](#lint:alias)
* [release](#release)

## build
__Builds project__

```
roc-internal-dev build
```

## build:watch
__Builds project in watch mode__

```
roc-internal-dev build:watch
```

## clean
__Cleans generated files__

```
roc-internal-dev clean
```

## docs
__Generates markdown documentation__

```
roc-internal-dev docs
```

## esdocs
__Generates ESDoc__

```
roc-internal-dev esdocs
```

## link
__Links up the project__

```
roc-internal-dev link
```

## lint
__Runs lint__

```
roc-internal-dev lint
```

## lint:alias
__Run local lint inside packages__

```
roc-internal-dev lint:alias
```

## release
__Run release script__

```
roc-internal-dev release
```

