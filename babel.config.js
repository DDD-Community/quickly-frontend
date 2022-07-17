module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  env: {},
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@context': './src/context',
          '@hooks': './src/hooks',
          '@pages': './src/pages',
          '@slices': './src/slices',
          '@store': './src/store',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
