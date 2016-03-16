module.exports = (name) =>
    `cd packages/${name} && npm link && cd ../../packages/${name}-dev && npm link ${name} && npm link`;
