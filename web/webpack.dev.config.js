const webpack = require('webpack');

const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    // enable HMR
    port: 3000
  },
  devtool: 'inline-source-map',
  entry: [
    path.join(__dirname, './index.js')
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        include: [
          path.resolve(__dirname, 'index.js'),
          path.resolve(__dirname, './node_modules/react-native-vector-icons'),
          path.resolve(__dirname, './node_modules/react-native-tab-view'),
          path.resolve(__dirname, './node_modules/react-navigation-playground'),
          path.resolve(__dirname, './node_modules/components'),
          path.resolve(__dirname, './node_modules/react-navigation'),
          path.resolve(__dirname, './node_modules/react-native-safe-area-view')
        ],
        use: [
          {
            loader: 'babel-loader'
          }
        ],
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      },
      {
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
      },

    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
    })
  ],
  resolve: {
    extensions: [ '.web.js', '.js' ],
    symlinks: false,
    alias: {
      'react-native': 'react-native-web'
    }
  }
};
