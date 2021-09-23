const { builtIns } = require('babel-preset-solid')().plugins[0][1]

const globals = {}
builtIns.forEach((builtIn) => { globals[builtIn] = false })

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  extends: ['standard', 'standard-jsx'],
  settings: {
    react: {
      version: '16'
    }
  },
  env: {
    browser: true
  },
  globals: globals,
  rules: {
    'react/jsx-key': 0,
    'react/jsx-fragments': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0
  }
}
