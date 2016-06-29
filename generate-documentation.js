const fs = require('fs');
const path = require('path');

const commandsToMarkdown = require('roc/lib/documentation/markdown/commandsToMarkdown').default;

const commands = require('./commands');

fs.writeFile(
    path.resolve('./docs/Commands.md'),
    commandsToMarkdown(
       'roc-package-internal-dev',
       { settings: {} },
       commands,
       undefined,
       undefined,
       undefined,
       'rid'
   )
);
