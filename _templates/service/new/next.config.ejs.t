---
to: apps/<%= name %>/next.config.js
---

const withTM = require("next-transpile-modules")(["@packages/ui","@packages/emotion-style-provider"]);

module.exports = withTM({
  reactStrictMode: true,
});
