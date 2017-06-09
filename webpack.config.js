const webpack = require('webpack');
const path = require('path');

module.exports = {

  // the main js file that starts your application (not html page that user loads)
  entry: path.join(__dirname, 'scripts', 'index.js'),

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: path.join(__dirname, 'scripts'),
        loader: ['babel-loader'],
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};
