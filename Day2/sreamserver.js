var fs = require('fs');
console.log("starting server... port 4200");

require('http').createServer(function(req, res) {
    // res.writeHead(200, {'Content-Type': 'video/mp4'});
    // var rs = fs.createReadStream('test.mp4');

   // res.writeHead(200, {'Content-Type': 'audio/mp3'});
    res.writeHead(200, {'Content-Type': 'video'});

    var rs = fs.createReadStream('../got.mkv');
    console.log("streaming the data...");
    rs.pipe(res);

}).listen(4200);