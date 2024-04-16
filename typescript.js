const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:jsdoc/recommended-typescript-error', // To make JSDoc rules work with TypeScript
        'plugin:@typescript-eslint/recommended', // TypeScript ESLint rules
        'plugin:@typescript-eslint/recommended-requiring-type-checking', // TypeScript ESLint rules that require type checking
        'plugin:@typescript-eslint/strict', // TypeScript ESLint rules that require strict mode
        'plugin:import/typescript', // Import plugin's TypeScript rules
      ],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      settings: {
        'import/resolver': {
          typescript: {
            project,
            alwaysTryTypes: true,
          },
          node: true,
        },
      },
      rules: {
        // TypeScript
        '@typescript-eslint/no-explicit-any': 2, // Disallows usage of the any type.
        '@typescript-eslint/no-floating-promises': 0, // Disallows usage of promise functions without using await.
        '@typescript-eslint/explicit-member-accessibility': 2, // Enforces accessibility modifiers on class properties and methods.
        '@typescript-eslint/explicit-function-return-type': [
          2,
          { allowExpressions: true },
        ], // Enforces return type declaration of functions.
        '@typescript-eslint/no-empty-interface': 0, // Disallows the declaration of empty interfaces.
        '@typescript-eslint/consistent-type-assertions': 0, // Enforces consistent usage of type assertions.
        '@typescript-eslint/non-nullable-type-assertion-style': 0, // Enforces non-nullable type assertions using the ! postfix operator.
      },
    },
  ],
};
