var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite,
    testStr = 123456;

var test1 = function(){
   var str = testStr.toString();
};
var test2 = function(){
    var str = String(testStr);
};
var test3 = function(){
    var str ="" +testStr;
};
// 添加测试
suite.add('toString', function() {
    test1();
}).add('String  ', function() {
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

