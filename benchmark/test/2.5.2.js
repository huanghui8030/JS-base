var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite,
    color = "black";

var test1 = function(){
   if (color) {
    if(color === 'black') {

    }else if(color === 'red') {
    }else if(color === 'blue') {
    }else if(color === 'green') {
    }else{
    }
}
};
var test2 = function(){
	switch(color) {
    case 'black':
        break;
    case 'red':
        break;
    case 'blue':
        break;
    case 'green':
        break;
    default:
  }
};
// 添加测试
suite.add('if    ', function() {
    test1();
}).add('switch', function() {
    test2();
}).on('cycle', function(event) {
    console.log(String(event.target));// add listeners
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': false });// run async

