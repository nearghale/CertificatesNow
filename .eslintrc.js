module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'linebreak-style': 0,
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'no-undef': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'default-param-last': 'off',
    'no-useless-catch': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-expressions': 'off',
    'max-len': ['error', { code: 130 }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
