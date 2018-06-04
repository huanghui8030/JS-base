var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite;
var test1 = function(){
    var aa = "aa",
        bb = "bb",
        cc = "cc",
        dd;    
};
var test2 = function(){
    var aa = "aa";
    var bb = "bb";
    var cc = "cc";
    var dd; 
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

