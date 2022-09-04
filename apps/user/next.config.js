const withTM = require('next-transpile-modules')([
    'ui',
    '@packages/emotion-style-provider',
    '@packages/preview',
]);

module.exports = withTM({
    reactStrictMode: true,
});
