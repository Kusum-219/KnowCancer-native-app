module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  bracketSameLine: true,
  singleQuote: true,
  arrowParens: 'avoid',
    trailingComma: 'all',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};
