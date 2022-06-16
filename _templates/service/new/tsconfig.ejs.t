---
to: apps/<%= name %>/tsconfig.json
---

{
  "extends": "@packages/tsconfig/nextjs.json",
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
