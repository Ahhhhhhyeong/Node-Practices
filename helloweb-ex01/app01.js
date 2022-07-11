var http = require('http');

var port = 9090;
var server = http.createServer(function(req, resp){
    resp.writeHead(200, {
        'content-Type': 'text/html'
    });
    resp.end('<h1>Hello World</h1>')
});

server.listen(port, function(){
    console.log("http server running on " + port);
});