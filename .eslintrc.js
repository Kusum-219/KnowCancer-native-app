module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        "no-unused-vars": "off",
    "no-console": "warn",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {"ignoreRestSiblings": true, "argsIgnorePattern": "^_"}]
      },
    },
  ],
};
