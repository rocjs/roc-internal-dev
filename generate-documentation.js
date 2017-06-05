const fs = require('fs');
const path = require('path');

const commandsToMarkdown = require('roc/lib/documentation/markdown/commandsToMarkdown').default;

const commands = require('./commands');

fs.writeFile(
    path.resolve('./docs/Commands.md'),
    commandsToMarkdown(
       'roc-internal-dev',
       { settings: {} },
       commands,
       undefined,
       undefined,
       undefined,
       'rid'
   )
, (error) => {
    if (error) {
        throw error;
    }

    console.log('The documentation has been updated.');
});
