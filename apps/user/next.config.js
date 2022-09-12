const withTM = require('next-transpile-modules')([
    '@packages/emotion-style-provider',
    '@packages/preview',
    '@packages/ui',
]);

module.exports = withTM({
    reactStrictMode: true,
});
