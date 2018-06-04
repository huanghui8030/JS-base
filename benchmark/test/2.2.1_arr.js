var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite;
var test1 = function(){
   var arr = new Array("one", "two", "three");

};
var test2 = function(){
    var arr = ["one", "two", "three"]; 
};
// 添加测试
suite.add('arr1#test', function() {
    test1();
}).add('arr2#test', function() {
    test2();
}).on('cycle', function(event) {
    console.log(String(event.target));// add listeners
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': false });// run async

