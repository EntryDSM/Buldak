const withTM = require('next-transpile-modules')([
    '@packages/ui',
    '@packages/emotion-style-provider',
    "@packages/preview",
]);

module.exports = withTM({
    reactStrictMode: true,
});
