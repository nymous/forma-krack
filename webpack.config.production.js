/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin")
var CopyWebpackPlugin = require("copy-webpack-plugin")

let outputPath = path.join(__dirname, "dist")

module.exports = {
  entry: [
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: outputPath,
    filename: "bundle.js",
    publicPath: "./"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false,
        parallel: true
      }
    }),
    new CopyWebpackPlugin([
      {from: './index.production.html', to: path.join(outputPath, 'index.html')}
    ])
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules\/(?!(spectacle-theme-nova)\/).*/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader?limit=8192"
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }, {
      test: /\.(eot|ttf|woff2?)(\?.*)?$/,
      loader: 'file-loader'
    }]
  }
};
