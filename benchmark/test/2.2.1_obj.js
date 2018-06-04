var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite;
var test1 = function(){
    var obj = new Object();
    obj.debug = false;
    obj.lang ="en";

};
var test2 = function(){
    var obj = {debug:false,lang:"en"}; 
};
// 添加测试
suite.add('obj1#test', function() {
    test1();
}).add('obj2#test', function() {
    test2();
}).on('cycle', function(event) {
    console.log(String(event.target));// add listeners
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': false });// run async

