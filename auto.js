module.exports = {
  extends: 'slekup/prettier',
  overrides: [
    {
      extends: ['slekup/node', 'slekup/jsdoc'],
      files: ['*.js', '*.mjs', '*.cjs'],
    },
    {
      extends: ['slekup/node', 'slekup/jsdoc', 'slekup/typescript'],
      files: ['*.ts'],
    },
    {
      extends: ['slekup/node', 'slekup/jsdoc', 'slekup/react'],
      files: ['*.jsx'],
    },
    {
      extends: [
        'slekup/node',
        'slekup/jsdoc',
        'slekup/typescript',
        'slekup/react',
      ],
      files: ['*.tsx'],
    },
    {
      extends: ['slekup/json'],
      files: ['*.json'],
    },
    {
      extends: ['slekup/yaml'],
      files: ['*.yaml', '*.yml'],
    },
    {
      extends: ['slekup/markdown'],
      files: ['*.md', '*.mdx', '*.md/*.js'],
    },
  ],
};
