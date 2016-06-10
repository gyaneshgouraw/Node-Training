console.log("starting  ...\n") ;

//  $ npm install async

var async = require("async");

async.series([

	function(callback) {
		setTimeout(function() {
			console.log("Task 1");
			callback(null, 1); // error object, or null, if there is no error.
		}, 300);
	},

	function(callback) {
		setTimeout(function() {
			console.log("Task 2");
			callback(null, 2);
		}, 400);
	},

	function(callback) {
		setTimeout(function() {
			console.log("Task 3");
			callback(null, 32);
		}, 100);
	}

], function(error, results) {
	console.log(results);

});


  //
  // function(callback) {
  //   setTimeout(function() {
  //     console.log("Task 1");
  //     callback(); // error object, or null, if there is no error.
  //   }, 300);
  // }
