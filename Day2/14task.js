var http = require('http');
var qs = require('querystring');

var serverPort = 8124;
http.createServer(function (request, response) {
    if(request.method === "GET") {
       response.write("Hello");
        }

}).listen(serverPort);
console.log('Server running at localhost:'+serverPort);