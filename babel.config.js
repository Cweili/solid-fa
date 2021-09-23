const exclude = [
  '@babel/plugin-transform-async-to-generator',
  '@babel/plugin-transform-regenerator',
  '@babel/plugin-transform-typeof-symbol'
]

module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        loose: true,
        modules: false,
        exclude
      }
    ],
    [
      '@babel/preset-typescript'
    ],
    [
      'solid'
    ]
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env', {
            loose: true,
            exclude
          }
        ],
        [
          '@babel/preset-typescript'
        ],
        [
          'solid'
        ]
      ]
    }
  }
}
