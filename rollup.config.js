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
    input: 'src/index.ts',
    output: [
      {
        file: pkg.jsdelivr,
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
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es'
      },
      {
        file: pkg.main,
        format: 'cjs'
      }
    ],
    external: [
      'solid-js',
      'solid-js/web',
    ],
    plugins: [
      ...commonPlugins
    ]
  }
]
