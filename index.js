var http = require('http');
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {
    const tranferEncodingHeader = req.headers["transfer-encoding"];
    const contentLenghtHeader = req.headers["content-length"]
    if (req.method === "GET") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>My First Node.js Web Server</h1>');
    } else if (req.method === "POST") {
        if (tranferEncodingHeader && contentLenghtHeader) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            //res.end('<h1>I sense you\'re trying to smuggle something...</h1>');
            res.end('<h1>You got it cowboy, flag = oposec{happybdayoposec}</h1>');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>I feel like you\'re not trying hard enough</h1>');
        }
    } else {
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.end('<h1>Yeah, that\'s not gonna fly</h1>');
    }
}).listen(PORT);