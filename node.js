module.exports = {
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js', '*.json'],
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs', '*.jsx', '*.ts', '*.tsx'],
      env: {
        node: true,
      },
      extends: ['eslint:recommended', 'airbnb-base', 'slekup/import'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        'object-curly-spacing': 2, // Enforces consistent spacing inside braces
        'linebreak-style': 0, // Enforces consistent line endings (disabled for windows)
        'lines-between-class-members': 0, // Requires an empty line between class members
        'no-await-in-loop': 0, // Disallows await inside of loops
        'no-restricted-syntax': 0, // Disallows specified syntax
        'prefer-destructuring': 0, // Enforces destructuring from arrays and/or objects
        'consistent-return': 0, // Enforces consistent return statements
        'no-continue': 0, // Disallows continue statements
        'no-else-return': 0, // Disallows else blocks after return statements in if statements
        'no-unneeded-ternary': 0, // Disallows ternary operators when simpler alternatives exist
        'no-nested-ternary': 0, // Disallows nested ternary expressions
        'id-length': ['error', { min: 2 }], // Enforces a minimum identifier length
        'max-classes-per-file': 0, // Enforces a maximum number of classes per file
        'no-shadow': 0, // Disallows variable declarations from shadowing variables declared in the outer scope - Was causing problems
        'no-underscore-dangle': [2, { allow: ['_id'] }], // Disallows dangling underscores in identifiers
        'max-len': 0, // Enforces a maximum line length
        'comma-dangle': 0, // Requires or disallows trailing commas
        'arrow-body-style': 0, // Require braces around arrow function bodies
        'operator-linebreak': 0, // Enforce consistent linebreak style for operators
        'indent': 0, // Enforce consistent indentation
        'quote-props': 0, // Require quotes around object literal property names
        'object-curly-newline': 0, // Enforce consistent line breaks inside braces
      },
    },
  ],
};
