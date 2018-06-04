var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite,
    testStr = 3.56;

var test1 = function(){
   var str = parseInt(testStr);
};
var test2 = function(){
    var str = Math.floor(testStr);
};
// 添加测试
suite.add('parseInt', function() {
    test1();
}).add('Math   ', function() {
    test2();
})
.on('cycle', function(event) {
    console.log(String(event.target));// add listeners
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': false });// run async

