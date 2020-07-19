const path = require('path');
const PnPPlugin = require('pnp-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    plugins: [PnPPlugin],
  },
  resolveLoader: {
    plugins: [PnPPlugin.moduleLoader(module)],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { projectReferences: true },
      },
    ],
  },
  stats: 'errors-warnings',
};
