module.exports = {
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs', '*.jsx', '*.ts', '*.tsx'],
      extends: ['next'],
      env: {
        es6: true,
        node: true,
        browser: true,
      },
      parserOptions: {
        babelOptions: {
          presets: ['next/babel'],
        },
      },
      rules: {
        '@next/next/no-html-link-for-pages': 0, // Disallows usage of <a> for pages.

        // JSDoc (documentation) rules
        'jsdoc/require-jsdoc': 0, // Requires that all functions (? other contexts) have a JSDoc block.

        // ESLint
        'comma-spacing': 0, // Enforces consistent spacing before and after commas.
        'no-console': 0, // Disallows usage of console in the node environment.
      },
    },
  ],
};
