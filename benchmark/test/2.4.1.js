var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite,
    testStr = "123456"

var test1 = function(){
   var num = parseInt(testStr);
};
var test2 = function(){
    var num = Number(testStr);
};
var test3 = function(){
    var num = +testStr;
};
// 添加测试
suite.add('parseInt', function() {
    test1();
}).add('Number  ', function() {
    test2();
})
.add('+       ', function() {
    test3();
})
.on('cycle', function(event) {
    console.log(String(event.target));// add listeners
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': false });// run async

