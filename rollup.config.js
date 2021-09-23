import resolve from '@rollup/plugin-node-resolve'
import common from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import css from 'rollup-plugin-postcss'
import pkg from './package.json'

const commonPlugins = [
  resolve({
    browser: true,
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.css', '.json']
  }),
  babel({
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs']
  }),
  css({
    modules: {
      generateScopedName: '[hash:base64:6]'
    },
    minimize: true
  })
]

export default [
  {
    input: pkg.main,
    output: [
      {
        file: pkg.browser,
        format: 'iife',
        name: 'SolidFa'
      }
    ],
    plugins: [
      common(),
      ...commonPlugins
    ]
  },
  {
    input: pkg.main,
    output: [
      {
        file: pkg.module,
        format: 'es'
      },
      {
        file: pkg.browser.replace(/\.js$/, '.cjs.js'),
        format: 'cjs'
      }
    ],
    plugins: [
      ...commonPlugins
    ]
  }
]
