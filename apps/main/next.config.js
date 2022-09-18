const withTM = require('next-transpile-modules')([
    '@packages/ui',
    '@packages/emotion-style-provider',
]);

module.exports = withTM({
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
});
