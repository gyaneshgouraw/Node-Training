



var myVar = setInterval(function() {
  console.log("process.mem: ", process.memoryUsage()) ;
}, 1000);



setTimeout(function() {
  clearInterval(myVar);
}, 5100);
