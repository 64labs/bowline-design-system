module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: '16.8',
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/prop-types': 'off',
    'no-console': 'off',
  },
}
