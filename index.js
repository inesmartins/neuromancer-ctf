const path = require('path')
const PORT = process.env.PORT || 5000

var http = require('http');
  http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Your node.js server is running on localhost:3000');
}).listen(PORT);