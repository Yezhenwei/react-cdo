var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.listen('8888', function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("系统启动成功")
  }
});