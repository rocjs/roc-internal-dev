#! /usr/bin/env node

/*
* This is a bit of a hack, but it works :)
*/
const pkg = require('./package.json');
const roc = require('roc');
const rid = require('./').roc;

const toHide = Object.keys(roc.roc.config.commands).join(',');
const argv = [].concat(process.argv, ['markdown-commands', '--hide-commands', toHide]);

roc.runCli(
    { version: pkg.version, name: pkg.name },
    {
        commands: Object.assign({}, roc.roc.config.commands, rid.config.commands)
    },
    {
        commands: Object.assign({}, roc.roc.meta.commands, rid.meta.commands)
    },
    argv
);
