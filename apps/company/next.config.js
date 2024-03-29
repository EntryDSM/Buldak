const withTM = require('next-transpile-modules')([
    '@packages/ui',
    '@packages/emotion-style-provider',
    '@packages/preview',
    '@apps/user',
]);

module.exports = withTM({
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
});
