#! /usr/bin/env node

const pkg = require('./package.json');
const runCli = require('roc').runCli;
const roc = require('./').roc;

runCli({ version: pkg.version, name: pkg.name }, roc.config, roc.meta);
