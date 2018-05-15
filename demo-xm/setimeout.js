/*
 * 请这样一个函数：function repeat (func, times, wait) {}
 * 这个函数能返回一个新函数，比如这样用
    var repeatedFun = repeat(alert, 10, 5000)
    调用这个 repeatedFun ("hellworld")
    会alert十次 helloworld, 每次间隔500毫秒
 * huanghui 20180515
 */

function repeat (func, times, wait) {
    for (var i = 0; i < times; i++) {
        (function(n){
            setTimeout(function(){
                func(n,'helloworld');
            },wait)
        })(i);
    }
}

var repeatedFun = repeat(console.log, 10, 500);