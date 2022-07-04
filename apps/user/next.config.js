const withTM = require("next-transpile-modules")(["ui","@packages/emotion-style-provider"]);

module.exports = withTM({
  reactStrictMode: true,
});
