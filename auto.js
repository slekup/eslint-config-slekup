import prettierConfig from "./prettier.js";
import nodeConfig from "./node.js";
import jsdocConfig from "./jsdoc.js";
import typescriptConfig from "./typescript.js";
import reactConfig from "./react.js";
import jsonConfig from "./json.js";
import yamlConfig from "./yaml.js";
import markdownConfig from "./markdown.js";

export default [
  ...prettierConfig,
  ...[
    ...nodeConfig,
    ...jsdocConfig,
    {
      files: ["*.js", "*.mjs", "*.cjs"],
    },
  ],
  ...[
    ...nodeConfig,
    ...jsdocConfig,
    ...typescriptConfig,
    {
      files: ["*.ts"],
    },
  ],
  ...[
    ...nodeConfig,
    ...jsdocConfig,
    ...reactConfig,
    {
      files: ["*.jsx"],
    },
  ],
  ...[
    ...nodeConfig,
    ...jsdocConfig,
    ...typescriptConfig,
    ...reactConfig,
    {
      files: ["*.tsx"],
    },
  ],
  ...[
    ...jsonConfig,
    {
      files: ["*.json"],
    },
  ],
  ...[
    ...yamlConfig,
    {
      files: ["*.yaml", "*.yml"],
    },
  ],
  ...[
    ...markdownConfig,
    {
      files: ["*.md", "*.mdx", "*.md/*.js"],
    },
  ],
];
