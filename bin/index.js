#! /usr/bin/env node

const runCli = require('roc').runCli;

const packageJSON = require('../package.json');
const commands = require('../commands');

runCli({
    info: {
        version: packageJSON.version,
        name: Object.keys(packageJSON.bin)[0],
    },
    commands,
});
