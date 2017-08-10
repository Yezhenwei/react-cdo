var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	devtool: false,
  entry: {
    bundle: './src/container/Index.js',
    commons: ["react", "react-dom", "react-router", "react-redux", "react-cookie", "rc-queue-anim"],
  },
  output: {
    path: path.join(__dirname, 'deploy'),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[chunkhash:8].js',
  },
  module: {
    loaders: [
      {test: /\.js$/,loader: 'babel',exclude: /node_modules/, query: {presets: ['react', 'es2015']}},
      {test: /\.(less|css)$/, loader:  ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
      {test: /\.(jpe?g|png|gif|svg)$/,loader: 'url?limit=1024&name=images/[hash:8]'}
    ]
  },
  plugins: [
  	new webpack.ProvidePlugin({
      React: 'react',
      ReactDom: 'react-dom',
      QueueAnim: 'rc-queue-anim',
      cookie: 'react-cookie',
    }),
  	new CleanWebpackPlugin(['deploy'], __dirname),
  	new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js'),
    new webpack.optimize.UglifyJsPlugin({
	  output: {
	  	comments: false, // 去掉所有注释
      },
      compress: {
        warnings: false, //去除所有警告消息
      }
    }),
    
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    //Gzip压缩配置
    /*new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    }),*/
    new ExtractTextPlugin("bundle.css"),
  ]
};
