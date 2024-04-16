module.exports = {
  plugins: ['markdown'],
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      processor: 'markdown/markdown',
    },
    {
      // For markdown code blocks
      files: [
        '*.md/*.js',
        '*.mdx/*.js',
        '*.md/*.jsx',
        '*.mdx/*.jsx',
        '*.md/*.ts',
        '*.mdx/*.ts',
        '*.md/*.tsx',
        '*.mdx/*.tsx',
      ],
      rules: {
        'no-console': 0, // Allow console.log
        'import/no-unresolved': 0, // Allow import from markdown
      },
    },
  ],
};
