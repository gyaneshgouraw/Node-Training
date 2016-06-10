

/*
a) rss—The resident set size, the portion of the process’s memory that is held in RAM.
b) heapTotal—Available memory for dynamic allocations
c) heapUsed—Amount of heap used
*/


  console.log("process.arch: ", process.arch) ;
  console.log("process.mem: ", process.memoryUsage()) ;
  console.log("pid: ", process.pid) ;



// works on linux OS: signal hang up

// process.stdin.resume();
// process.on('SIGHUP', function () {
// 	console.log(' signal received...');
// });

// console.log("starting  ...\n") ;
//
// // $  npm install colors
//
// var colors = require ("colors") ;
// console.log("===>  Node is life\n\n".rainbow) ;
//
//
// colors.setTheme({
// 	mod1_warn: 'cyan',
// 	mod1_error: 'red',
// 	mymod2_note: 'yellow',
// 	my_info: 'green'
//  });
//
// console.log("This is a helpful message".mymod2_note);
// console.log("This is a err message".mod1_error);
// console.log("This is a warning ".mod1_warn);
// console.log("General Blah blah ... ".my_info);




// console.log("===>>   starting  ...\n") ;
// // ------------------------
//
// var fs = require('fs');
//
// fs.readFile('a.jpg', "base64", function(err, data) {
// 	if (err) { throw err;}
// 	console.log(data);
// });
// fs.readFile('test.html', "utf8", function(err, data) {
// 	if (err) { throw err;}
// 	console.log(data);
// });
// console.log("===>>   Reading file....");
// ------------------------
//
// var fs = require('fs');
//
// 	fs.readFile('test.html', function (er, buf) {
// 	console.log("status: ",  Buffer.isBuffer(buf)); // true
// 	console.log("buffer: " , buf) ;
// 	console.log(buf.toString('ascii'));
//    });
//
//
// 	var mime = 'image/png';
// 	var encoding = 'base64';
// 	var data = fs.readFileSync('a.JPG').toString(encoding);
//
// 	var uri = 'data:' + mime + ';' + encoding + ',' + data;
// 	console.log(uri);
//
// //  writing into a file.
// 	var data = uri.split(',')[1];
// 	var buf2 = Buffer(data, 'base64');
//
// 	fs.writeFileSync('b.JPG', buf2);





// console.log("starting  ...\n") ;
// // ------------------------
// var fs = require("fs");
// var fileName = "test.html";
//
//
// fs.exists(fileName, function(exists) {
// 	if (exists) {
// 		fs.stat(fileName, function(error, stats) {
// 		  if (error) {
// 			throw error;
// 		  }
//
// if (stats.isFile()) {
// 	fs.readFile(fileName, "utf8", function(error, data) {
// 		if (error) {
// 			throw error;
// 		}
//
// 		console.log(data);
// 		console.log("=====stats========\n");
// 		console.log(stats);
//
// 		});
// 	   }
//      else{
//        console.log("its directory")
//      }
//     });
//   }
// });
//





// console.log("starting  ...\n") ;
//
// var fs = require("fs");
//
//
// //var fileName = "";
// //var fileName = "1colour.js";
//
// try {
// fs.readFile(fileName, "utf8", function(error, data) {
// 	if (error) {
// 		throw error;
// 	}
// 	console.log(data);
//   });
// } catch (e) {
// 	console.log("exception caught: ", e)
// 	/*
// 	(a) Error: ENOENT: no such file or directory- the exception is left uncaught.
// 	OR
// 	(b) exception caught:  [ReferenceError: fileName is not defined]
// 	*/
//
// }
//
// process.on("uncaughtException",function(error){
//   console.log("exception caught")
// })
