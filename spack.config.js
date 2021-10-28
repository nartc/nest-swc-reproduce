module.exports = {
  entry: __dirname + '/src/main.ts',
  output: {
    path: __dirname + '/dist/',
  },
  target: 'node',
  options: {
    jsc: {
      target: 'es2017',
      parser: {
        syntax: 'typescript',
        decorators: true,
        dynamicImport: true,
      },
      transform: {
        decoratorMetadata: true,
        legacyDecorator: true,
      },
      keepClassNames: true,
      externalHelpers: true,
      loose: true,
    },
    module: {
      type: 'commonjs',
      strict: true,
      noInterop: true,
    },
  },
};
