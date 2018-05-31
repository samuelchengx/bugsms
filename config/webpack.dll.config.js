const webpack = require('webpack')
const path = require('path')

const VENDORS = [
  'react',
  'react-dom',
  'react-router-dom',
  'prop-types',
  'redux',
  'react-redux',
  'react-router-redux',
]

module.exports = {
  output: {
    path: path.resolve(__dirname, '../public/build'),
    filename: '[name]_[chunkhash].min.js',
    library: '[name]_[chunkhash]',
  },
  entry: {
    vendor: VENDORS,
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': '"production"',
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     screw_ie8: true, // React doesn't support IE8
    //     unused: true,
    //     dead_code: true,
    //   },
    //   mangle: {
    //     screw_ie8: true,
    //   },
    //   output: {
    //     comments: false,
    //     screw_ie8: true,
    //   },
    // }),
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]_[chunkhash]',
      context: __dirname,
    }),
  ],
}
