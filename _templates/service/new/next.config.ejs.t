---
to: apps/<%= name %>/next.config.js
---

const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
