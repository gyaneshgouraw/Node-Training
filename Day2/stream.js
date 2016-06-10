console.log("starting  ...\n") ;
// ------------------------
// var fs = require('fs');
//
// var readableStream = fs.createReadStream('a1.txt');
// var data = '';
//
// readableStream.setEncoding('utf8');
//
// readableStream.on('data', function(block) {
//     data+=block;
// });
//
// readableStream.on('end', function() {
//     console.log(data);
// });



//  ================  write ==========
var fs = require('fs');
// var readableStream = fs.createReadStream('a1.txt');
// var writableStream = fs.createWriteStream('b2.txt');
//
// readableStream.setEncoding('utf8');
//
// readableStream.on('data', function(blk) {
//     writableStream.write(blk);
// });


//  ================  write ==========

var stream = fs.createWriteStream('b3.txt', {flags: 'a'});
var data = "using node!\n";
stream.write(data, function() {
    // Now the data has been written.
});


//  =============Pipe ===========

// var fs = require('fs');
// var readableStream = fs.createReadStream('test2.txt');
// var writableStream = fs.createWriteStream('test3.txt');
//
// readableStream.pipe(writableStream);