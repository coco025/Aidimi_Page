var i=0;

setInterval(function() {
    if (i<=20){
        $('.bar').width(i + '%');
        i++
    }
}, 10);