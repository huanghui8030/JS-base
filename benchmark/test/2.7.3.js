var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite,
    color = "gotobeijinga";

var test1 = function(){
   if (color=="gotobeijinga") {
        var d=Date();
    }
};
var test2 = function(){
	if (color==="gotobeijinga") {
        var d=Date();
    }
};
// 添加测试
suite.add('== ', function() {
    test1();
}).add('===', function() {
    test2();
}).on('cycle', function(event) {
    console.log(String(event.target));// add listeners
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': false });// run async

