var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite;
    arr= [1,2,3,4,5,6,7,8,9];
var test1 = function(){
   for(var i=0;i<arr.length;i++){

   }
};
var test2 = function(){
    for(var i=0,len= arr.length;i<len;i++){
     
   }
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

