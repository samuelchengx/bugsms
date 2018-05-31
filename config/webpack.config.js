const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

/* postcss plugins */
const postcssGlobalImport = require('postcss-global-import')
const postcssCustomProperties = require('postcss-custom-properties')
const postcssCustomMedia = require('postcss-custom-media')
const postcssMediaMinmax = require('postcss-media-minmax')
const postcssCustomSelectors = require('postcss-custom-selectors')
const postcssCalc = require('postcss-calc')
const postcssNesting = require('postcss-nesting')
const postcssNested = require('postcss-nested')
const postcssColorFunction = require('postcss-color-function')
const pleeeaseFilters = require('pleeease-filters')
const pixrem = require('pixrem')
const postcssSelectorMatches = require('postcss-selector-matches')
const postcssSelectorNot = require('postcss-selector-not')
const postcssImport = require('postcss-import')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const autoprefixer = require('autoprefixer')

/* configs */
const pkg = require('../package.json')
const config = require('./env')
const manifest = require('../manifest.json')

const paths = config.utils_paths
const __DEBUG__ = config.globals.__DEBUG__

module.exports = {
  name: 'client',
  target: 'web',
  entry: Object.assign(__DEBUG__
    ? {
      'index': [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        'webpack/hot/only-dev-server',
        paths.client('index.js'),
      ],
    }
    : {
      'index': paths.client('index.js'),
    }),
  output: {
    path: paths.dist(),
    publicPath: '/dist/',
    filename: __DEBUG__ ? '[name].js' : '[name].[hash:8].js',
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      include: [
        paths.base(),
      ],
      exclude: /node_modules/,
      query: {
        babelrc: false,
        presets: [
          [
            'env',
            {
              targets: {
                browsers: pkg.browserList,
              },
              modules: false,
              useBuiltIns: true,
              debug: false,
            },
          ],
          'stage-2',
          'react',
        ],
        plugins: [
          ...__DEBUG__ ? [
            'react-hot-loader/babel',
          ] : [],
          'transform-decorators-legacy',
        ],
      },
    },
    {
      test: /\.s?css$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: false,
          sourceMap: __DEBUG__,
          localIdentName: __DEBUG__ ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
          minimize: !__DEBUG__,
          discardComments: { removeAll: true },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            postcssGlobalImport(),
            postcssImport(),
            postcssCustomProperties(),
            postcssCustomMedia(),
            postcssMediaMinmax(),
            postcssCustomSelectors(),
            postcssCalc(),
            postcssNesting(),
            postcssNested(),
            postcssColorFunction(),
            pleeeaseFilters(),
            pixrem(),
            postcssSelectorMatches(),
            postcssSelectorNot(),
            postcssFlexbugsFixes(),
            autoprefixer(pkg.browserList),
          ],
        },
      },
      ],
    },
    {
      test: /\.(jpg|jpeg|png|gif)(\?.*)?$/,
      loader: 'file-loader',
      query: {
        name: __DEBUG__ ? '../images/[name].[ext]?[hash:8]' : '[hash:8].[ext]',
      },
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff',
    },
    ],
  },
  devtool: __DEBUG__ ? 'cheap-module-source-map' : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': __DEBUG__ ? '"development"' : '"production"',
      __DEBUG__: __DEBUG__,
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: manifest,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      PropTypes: 'prop-types',
    }),
    ...__DEBUG__
      ? [
        new webpack.HotModuleReplacementPlugin(),
      ]
      : [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: false,
          compress: {
            screw_ie8: true, // React doesn't support IE8
            unused: true,
            dead_code: true,
          },
          mangle: {
            screw_ie8: true,
          },
          output: {
            comments: false,
            screw_ie8: true,
          },
        }),
        new webpack.optimize.DedupePlugin(),
      ],
    // write the file hash mapping into a json file in the root of the server path
    function () {
      this.plugin('done', (stats) => {
        let _stats = stats.toJson()
        fs.writeFileSync(path.join(__dirname, '../HashMapping.json'), JSON.stringify(_stats.assetsByChunkName))
      })
    },
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}
