module.exports = {
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      parser: 'yaml-eslint-parser',
      plugins: ['yml'],
      rules: {
        'yml/block-mapping-colon-indicator-newline': 2, // Enforce placing colons on new lines in block mappings.
        'yml/block-mapping-question-indicator-newline': 2, // Enforce placing question indicators on new lines in block mappings.
        'yml/block-mapping': 2, // Enforce block mapping style.
        'yml/block-sequence-hyphen-indicator-newline': 2, // Enforce placing hyphen indicators on new lines in block sequences.
        'yml/block-sequence': [2, 'always'], // Enforce block sequence style.
        'yml/file-extension': [2, { extension: 'yaml', caseSensitive: true }], // Enforce a file extension.
        'yml/indent': [2, 2], // Enforce consistent indentation.
        'yml/key-name-casing': 0, // Enforce a consistent key name casing.
        'yml/no-empty-document': 2, // Disallow empty documents.
        'yml/no-empty-key': 2, // Disallow empty keys.
        'yml/no-empty-mapping-value': 2, // Disallow empty mapping values.
        'yml/no-empty-sequence-entry': 2, // Disallow empty sequence entries.
        'yml/no-tab-indent': 2, // Disallow tabs for indentation.
        'yml/no-trailing-zeros': 0, // Disallow trailing decimal points in numbers.
        'yml/plain-scalar': 0, // Enforce plain style for scalar values.
        'yml/quotes': [
          2,
          {
            avoidEscape: true,
            prefer: 'single',
          },
        ], // Enforce single quotes.
        'yml/require-string-key': 2, // Require a string key in mappings.
        'yml/sort-keys': 0, // Enforce sorting keys in mappings.
        'yml/sort-sequence-values': 0, // Enforce sorting values in sequences.
        'yml/vue-custom-block/no-parsing-error': 2, // Disallow parsing errors in Vue custom blocks.

        // Extension rules.
        'yml/flow-mapping-curly-newline': 2, // Enforce placing curly braces on new lines in flow mappings.
        'yml/flow-mapping-curly-spacing': 2, // Enforce consistent spacing inside braces in flow mappings.
        'yml/flow-sequence-bracket-newline': 2, // Enforce placing brackets on new lines in flow sequences.
        'yml/flow-sequence-bracket-spacing': 2, // Enforce consistent spacing inside brackets in flow sequences.
        'yml/key-spacing': 2, // Enforce consistent spacing between keys and values in mappings.
        'yml/no-irregular-whitespace': 2, // Disallow irregular whitespace outside of strings and comments.
        'yml/no-multiple-empty-lines': 0, // Disallow multiple empty lines.
        'yml/spaced-comment': 2, // Enforce consistent spacing after the # in comment lines.
      },
    },
  ],
};
