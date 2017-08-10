var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var server = new (require('express'))();
var compression = require('compression');
server.use(compression());
var port = 8888;

var compiler = webpack(config);
server.use(webpackDevMiddleware(compiler, { 
	noInfo: true,
	publicPath: config.output.publicPath,
	stats: { 
        colors: true  // 用颜色标识
    }
}
));
server.use(webpackHotMiddleware(compiler));

server.get("*", function(req, res) {
  console.log(req.url)
  res.sendFile(__dirname + '/build/index.html')
});

server.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
