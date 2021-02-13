const PORT = process.env.PORT || 5000

var http = require('http');
  http.createServer(function (req, res) {
    if (req.method === "GPOST") {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>You got it cowboy, flag = oposec{happybdayoposec}</h1>');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>My First Node.js Web Server</h1>');
}).listen(PORT);