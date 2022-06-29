---
to: apps/<%= name %>/next.config.js
---

const withTM = require("next-transpile-modules")(["ui","@packages/emotion-style-provider"]);

module.exports = withTM({
  reactStrictMode: true,
});
