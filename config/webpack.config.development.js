const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.config.base');
const path = require('path');

const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('development')
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
};

module.exports = merge(config, {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    application: [
      'bootstrap-loader',
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      'development',
    ],
    vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.LoaderOptionsPlugin({
       debug: true
     })
  ],
  module: {
    rules: [
      // Sass
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, '../src/client/assets/javascripts'),
          path.resolve(__dirname, '../src/client/assets/styles'),
          path.resolve(__dirname, '../src/client/scripts')
        ],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: { outputStyle: 'expanded' },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: 'config/sass-resources.scss',
            }
          },
        ]
      },
      // Less
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, '../src/client/assets/javascripts'),
          path.resolve(__dirname, '../src/client/assets/styles'),
          path.resolve(__dirname, '../src/client/scripts')
        ],
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      // Sass + CSS Modules
      // {
      //   test: /\.scss$/,
      //   include: /src\/client\/assets\/javascripts/,
      //   loaders: [
      //     'style',
      //     {
      //       loader: 'css',
      //       options: {
      //         modules: true,
      //         importLoaders: 1,
      //         localIdentName: '[path][name]__[local]--[hash:base64:5]'
      //       }
      //     },
      //     'postcss',
      //     { loader: 'sass', options: { outputStyle: 'expanded' } }
      //   ]
      // },
      // CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
});
