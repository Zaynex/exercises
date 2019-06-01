function throttle(func, wait, immediate) {
    let timestamp, context, timer, result, args;
    function later() {
        var last = Date.now() - timestamp;
        if(last >= wait) {
            result = func.apply(context, args);
            timer = setTimeout(later, last - wait)
        }

    }
    return function() {
        timestamp = Date.now(),
        context = this,
        args = arguments;
        if(!timer) timer = setTimeout(later, wait);
        if(immediate && !timer) {
            result = func.apply(context, args);
        }
    }
}