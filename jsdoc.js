module.exports = {
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs', '*.jsx', '*.ts', '*.tsx'],
      plugins: ['jsdoc'],
      rules: {
        'jsdoc/require-jsdoc': [
          'error',
          {
            contexts: [
              'FunctionDeclaration',
              'FunctionExpression',
              'ArrowFunctionExpression',
              'ClassDeclaration',
              'ClassExpression',
              'MethodDefinition',
            ],
          },
        ], // Requires that all functions (? other contexts) have a JSDoc block.
        // 'jsdoc/require-jsdoc': 0, // Requires that all functions (? other contexts) have a JSDoc block.
        'jsdoc/check-examples': 0, // Linting of JavaScruopt within @example (disabled for now, cause not supported for eslint 8).
        'jsdoc/check-indentation': 2, // Enforces indentation level for tags.
        'jsdoc/check-line-alignment': 2, // Reports invalid alignment of JSDoc block lines.
        'jsdoc/check-syntax': 2, // Reports invalid block tag syntax.
        'jsdoc/no-bad-blocks': 2, // Reports bad block tag syntax.
        'jsdoc/no-blank-block-descriptions': 2, // Reports blocks without description.
        'jsdoc/no-blank-blocks': 2, // Reports empty block tags.
        'jsdoc/require-asterisk-prefix': 2, // Requires that each JSDoc line starts with an "*".
        'jsdoc/require-description': 2, // Requires that all functions (? other contexts) have a description.
        'jsdoc/require-description-complete-sentence': 1, // Requires that block descriptions start with a capital letter and ends with a dot.
        'jsdoc/require-example': 0, // Requires that all functions (? other contexts) have examples
        'jsdoc/sort-tags': 1, // Requires that all tags are sorted alphabetically.
      },
    },
  ],
};
