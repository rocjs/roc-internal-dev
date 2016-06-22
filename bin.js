#! /usr/bin/env node

const runCli = require('roc').runCli;

const pkg = require('./package.json');
const commands = require('./commands');

runCli({
    info: {
        version: pkg.version,
        name: Object.keys(pkg.bin)[0]
    },
    commands
});
