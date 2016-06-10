// $  npm install q

var q = require('q');

// console.log(q) ;

function doSomethingAsync() {
    var deferred = q.defer();
    setTimeout(function() {
        console.log("timer fired.") ;
        deferred.resolve('node looks promising.');
    }, 500);

    return deferred.promise;
}

doSomethingAsync().then(function(val) {
    console.log('Promise Resolved!\n', val);
});