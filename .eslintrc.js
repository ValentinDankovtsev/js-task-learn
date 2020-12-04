module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 'off',
    'max-len': ['error', { code: 400, ignoreComments: true }],
    'no-restricted-globals': 'off',
    'no-console': 'off',
    'linebreak-style': 'off',
    'no-restricted-syntax': 'off',
  },
  plugins: ['jest'],
};
