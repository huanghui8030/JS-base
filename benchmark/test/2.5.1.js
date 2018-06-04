var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite,
    mycars = ["Saab","Volvo","BMW"];

var test1 = function(){
   for(var i=0,len=mycars.length;i<len;i++){
   		mycars[i] = mycars[i]+"Car";
   }
};
var test2 = function(){
	var i=0;
    while (i<mycars.length)
	{
    	mycars[i] = mycars[i]+"Car";
    	i++;
	}
};
var test3 = function(){
	for (var i in mycars)
	{
	   mycars[i] = mycars[i]+"Car";
	}
};
// 添加测试
suite.add('for   ', function() {
    test1();
}).add('while ', function() {
    test2();
}).add('forin', function() {
    test3();
}).on('cycle', function(event) {
    console.log(String(event.target));// add listeners
}).on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': false });// run async

