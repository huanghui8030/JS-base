var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite;
var test1 = function(){
    var arr=[];
    for(var i=0;i<10;i++){
       arr[arr.length] = i;
    }
    return arr;

};
var test2 = function(){
    var arr=[];
    for(var i=0;i<10;i++){
       arr[i] = i;
    }
    return arr;
};
var test3 = function(){
   var arr=[];
    for(var i=0;i<10;i++){
        arr.push(i);
    }
    return arr;
};
// 添加测试
suite.add('demo1#test', function() {
    test1();
}).add('demo2#test', function() {
    test2();
}).add('demo3#test', function() {
    test3();
}).on('cycle', function(event) {
    console.log(String(event.target));// add listeners
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': false });// run async

