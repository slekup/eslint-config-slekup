module.exports = {
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs', '*.jsx', '*.ts', '*.tsx'],
      extends: ['plugin:import/recommended'],
      settings: {
        'import/resolver': {
          node: true,
        },
      },
      rules: {
        // Import
        'import/no-unresolved': 0, // Ensures that all imports are resolvable to a module on the local filesystem
        'import/first': 0, // Reports any imports that come after non-import statements
        'import/extensions': 0, // Ensures consistent use of file extension within the import path
        'import/prefer-default-export': 0, // Prefer a default export if module exports a single name
        'import/no-anonymous-default-export': 0, // Disallows anonymous default exports
        'import/no-relative-packages': 0, // Prevent importing packages through relative paths
      },
      overrides: [
        {
          files: ['*.{spec,test}.ts', '*.{spec,test}.tsx'],
          rules: {
            'import/no-extraneous-dependencies': 0, // Forbid the use of extraneous packages
          },
        },
      ],
    },
  ],
};
