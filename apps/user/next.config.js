const withTM = require('next-transpile-modules')([
    'ui',
    '@packages/emotion-style-provider',
    '@packages/preview',
    '@packages/ui',
]);

module.exports = withTM({
    reactStrictMode: true,
});
