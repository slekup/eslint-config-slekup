import process from "node:process";
import { resolve } from "node:path";
const project = resolve(process.cwd(), "tsconfig.json");

import jsdoc from "eslint-plugin-jsdoc";
import eslintJs from "@eslint/js";
import tseslint from "typescript-eslint";
// NOTE: https://github.com/import-js/eslint-plugin-import/issues/2995
// import importPlugin from "eslint-plugin-import";

export default [
  eslintJs.configs.recommended,
  jsdoc.configs["flat/recommended"], // To make JSDoc rules work with TypeScript
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  // importPlugin.flatConfigs.recommended,
  {
    files: ["*.ts", "*.tsx"],
    plugins: {
      jsdoc,
    },
    /* parserOptions: {
      project,
      ecmaVersion: "latest",
      sourceType: "module",
    }, */
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          project,
          alwaysTryTypes: true,
        },
        node: true,
      },
    },
    rules: {
      // TypeScript
      "@typescript-eslint/no-explicit-any": 2, // Disallows usage of the any type.
      "@typescript-eslint/no-floating-promises": 0, // Disallows usage of promise functions without using await.
      "@typescript-eslint/explicit-member-accessibility": 2, // Enforces accessibility modifiers on class properties and methods.
      "@typescript-eslint/explicit-function-return-type": [
        2,
        { allowExpressions: true },
      ], // Enforces return type declaration of functions.
      "@typescript-eslint/no-empty-interface": 0, // Disallows the declaration of empty interfaces.
      "@typescript-eslint/consistent-type-assertions": 0, // Enforces consistent usage of type assertions.
      "@typescript-eslint/non-nullable-type-assertion-style": 0, // Enforces non-nullable type assertions using the ! postfix operator.
    },
  },
];
