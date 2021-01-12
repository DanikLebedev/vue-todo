module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  globals: {
    'vue-jest': {
      experimentalCSSCompile: true
    }
  },
  snapshotSerializers: ['jest-serializer-vue'],
  transformIgnorePatterns: ['./node_modules/(?!primevue/)']
};
