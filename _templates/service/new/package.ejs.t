---
to: apps/<%= name %>/package.json
---

{
  "name": "@apps/<%= name %>",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "12.0.8",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "@packages/ui": "*",
    "react-query": "^3.39.1",
    "@emotion/react": "^11.9.3",
    "@emotion/styled": "^11.9.3",
    "@packages/emotion-style-provider":"*"
  },
  "devDependencies": {
    "eslint": "7.32.0",
    "@packages/eslint-config-custom": "*",
    "next-transpile-modules": "9.0.0",
    "@packages/tsconfig": "*",
    "@types/node": "^17.0.12",
    "@types/react": "17.0.37",
    "typescript": "^4.5.3"
  }
}
