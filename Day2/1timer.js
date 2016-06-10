var EventEmitter = require('events').EventEmitter;

var pulsar = new pulsar(1000,1);

pulsar.on('pulse',function(){
    console.log(process.memoryUsage());
})

function pulsar (sec, times){
    var emitter = new EventEmitter();
    var t;
    if (times > 0) {
        t = setInterval(function () {
            times--;
            console.log(times)
            emitter.emit("pulse");
            if (times < 1)
                clearInterval(t)
        }, sec);
    }
        return emitter;

}








