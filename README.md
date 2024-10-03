## Slekup ESLint Config

![NPM Version](https://img.shields.io/npm/v/eslint-config-slekup.svg) ![NPM License](https://img.shields.io/npm/l/eslint-config-slekup.svg) ![NPM Downloads](https://img.shields.io/npm/dm/eslint-config-slekup.svg)

## Usage

These configurations are best used with prettier configured separately.

```js
import slekupConfig from "eslint-config-slekup";

export default [slekupConfig];
```

## Rulesets

- `slekup` - Base ruleset.
- `slekup/import` - For projects using `import`/`export`.
- `slekup/jsdoc` - For projects using JSDoc/TSDoc.
- `slekup/json` - For JSON files.
- `slekup/markdown` - For Markdown files.
- `slekup/next` - For Next.js projects.
- `slekup/node` - For Node.js projects.
- `slekup/prettier` - For projects using Prettier.
- `slekup/react` - For React projects.
- `slekup/typescript` - For TypeScript projects.
- `slekup/yaml` - For YAML files.
