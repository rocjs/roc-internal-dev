module.exports = (name) => `cd packages/${name} && npm run lint && cd ../../packages/${name}-dev && npm run lint`;
