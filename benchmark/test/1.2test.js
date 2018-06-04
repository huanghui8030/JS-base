var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite;
var test1 = function(){
    var count = 10,res = '';
    while(count--){
        res += 'a'
    }    
};
var test2 = function(){
    var count = 10,res = [];
    while(count--){
        res.push('a');
    }    
    res = res.join('');
};
// 添加测试
suite.add('concat#test', function() {
    test1();
}).add('jion#test', function() {
    test2();
}).on('cycle', function(event) {
    console.log(String(event.target));// add listeners
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': false });// run async

