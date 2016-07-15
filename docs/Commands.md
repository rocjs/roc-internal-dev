# Commands for `roc-internal-dev`

## General Information
All commands can be called with some additional options as can be seen below.

### General options
| Name                  | Description                                                                                                   | Required |
| --------------------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| -b, --better-feedback | Will enable source-map-support and loud-rejection for a better experience with better feedback.               | No       |
| -c, --config          | Path to configuration file, will default to roc.config.js in current working directory.                       | No       |
| -d, --directory       | Path to working directory, will default to the current working directory. Can be either absolute or relative. | No       |
| -h, --help            | Output usage information.                                                                                     | No       |
| -V, --verbose         | Enable verbose mode.                                                                                          | No       |
| -v, --version         | Output version number.                                                                                        | No       |

## Commands
* [build](#build)
* [build:watch](#buildwatch)
* [clean](#clean)
* [docs](#docs)
* [esdocs](#esdocs)
* [link](#link)
* [lint](#lint)
* [lint:alias](#lintalias)
* [release](#release)
* [rnm](#rnm)

## build
__Builds project__

```
rid build
```

## build:watch
__Builds project in watch mode__

```
rid build:watch
```

## clean
__Cleans generated files__

```
rid clean
```

## docs
__Generates markdown documentation__

```
rid docs
```

## esdocs
__Generates ESDoc__

```
rid esdocs
```

## link
__Links up the project__

```
rid link [modules]
```

### Arguments
| Name    | Description                                                      | Default | Type | Required | Can be empty |
| ------- | ---------------------------------------------------------------- | ------- | ---- | -------- | ------------ |
| modules | Modules that should be linked into the extensions in extensions/ |         | `[]` | No       | Yes          |

## lint
__Runs lint__

```
rid lint
```

## lint:alias
__Run local lint inside packages__

```
rid lint:alias
```

## release
__Run release script__

```
rid release
```

### Command options
| Name        | Description                                                            | Default | Type      | Required | Can be empty |
| ----------- | ---------------------------------------------------------------------- | ------- | --------- | -------- | ------------ |
| --use-alias | If lint:alias should be used over the default lint when doing releases | `false` | `Boolean` | No       |              |

## rnm
__Removes node_modules folders in extensions/__

```
rid rnm
```

