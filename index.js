var http = require('http');
const PORT = process.env.PORT || 5000

const smuggleParam = 'OFLAG'

http.createServer(function (req, res) {
    if (req.method === "GET") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>My First Node.js Web Server</h1><p>' + req.method + '</p>');
    } else if (req.method === "POST") {
        res.writeHead(400, {'Content-Type': 'text/html', 'Error': smuggleParam});
        res.end('<h1>Smuggle not found</h1><p>' + req.method + '</p>');
    } else if ((req.method === smuggleParam) || (req.headers["Content-Length"] && req.headers["Transfer-Encoding"])) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>You got it cowboy, flag = oposec{happybdayoposec}</h1><p>' + req.method + '</p>');
    } else {
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.end('<h1>Yeah, that\'s not gonna fly</h1><p>' + req.method + '</p>');
    }
}).listen(PORT);