var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite,
    x =23;
var test1 = function(){
    x=x+1;
};
var test2 = function(){
    x++;
};
// 添加测试
suite.add('demo1#test', function() {
    test1();
}).add('demo2#test', function() {
    test2();
}).on('cycle', function(event) {
    console.log(String(event.target));// add listeners
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': false });// run async

