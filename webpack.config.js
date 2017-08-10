var path = require('path')
var webpack = require('webpack')
var node_modules_dir = path.join(__dirname, 'node_modules');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/container/Index.js'
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'less'],
    alias: {
      'react' : path.resolve(node_modules_dir, 'react/dist/react.min.js'),
      'react-dom' : path.resolve(node_modules_dir, 'react-dom/dist/react-dom.min.js'),
      'react-redux' : path.resolve(node_modules_dir, 'react-redux/dist/react-redux.min.js'),
      'redux' : path.resolve(node_modules_dir, 'redux/dist/redux'),
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDom: 'react-dom',
      QueueAnim: 'rc-queue-anim',
      cookie: 'react-cookie',
    }),
    
  ],
  module: {
    noParse: [path.resolve(node_modules_dir, 'react/dist/react.min.js')],
    loaders: [{
        test: /\.js$/,
        loader:  'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
          env: {
            development: {
              presets: ["react-hmre"]
            }
          }
        }
      },{
        test: /\.(less|css)?$/,
        loaders : ['style', 'css', 'less']
      },{
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url?limit=1024',
      }]
  }
}