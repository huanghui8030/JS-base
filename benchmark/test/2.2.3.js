var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite;
var test1 = function(){
    var a={
            a1:"asdf",
            a2:"asdf",
            a3:"asdf",
            a4:"asdf",
            a5:"asdf",
            a6:"asdf",
            a7:"asdf",
            a8:"asdf",
            b:{
            	b1:"asdf",
	            b2:"asdf",
	            b3:"asdf",
	            b4:"asdf",
	            b5:"asdf",
	            b6:"asdf",
	            b7:"asdf",
	            b8:"asdf",
                c:{
                	c1:"asdf",
		            c2:"asdf",
		            c3:"asdf",
		            c4:"asdf",
		            c5:"asdf",
		            c6:"asdf",
		            c7:"asdf",
		            c8:"asdf",
                	d:{
                		d1:"asdf",
			            d2:"asdf",
			            d3:"asdf",
			            d4:"asdf",
			            d5:"asdf",
			            d6:"asdf",
			            d7:"asdf",
		           		d8:"asdf",
                    	e:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                    }    
                }
            }
        },arr=[];
    arr[0] = a.b.c.d.d1;
    arr[1] = a.b.c.d.d1;
    arr[2] = a.b.c.d.d1;
};
var test2 = function(){
    var a={
            a1:"asdf",
            a2:"asdf",
            a3:"asdf",
            a4:"asdf",
            a5:"asdf",
            a6:"asdf",
            a7:"asdf",
            a8:"asdf",
            b:{
            	a1:"asdf",
	            a2:"asdf",
	            a3:"asdf",
	            a4:"asdf",
	            a5:"asdf",
	            a6:"asdf",
	            a7:"asdf",
	            a8:"asdf",
                c:{
                	c1:"asdf",
		            c2:"asdf",
		            c3:"asdf",
		            c4:"asdf",
		            c5:"asdf",
		            c6:"asdf",
		            c7:"asdf",
		            c8:"asdf",
                    d:{
                    	d1:"asdf",
			            d2:"asdf",
			            d3:"asdf",
			            d4:"asdf",
			            d5:"asdf",
			            d6:"asdf",
			            d7:"asdf",
		           		d8:"asdf",
                    	e:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                    }
                }
            }
        },arr=[];
        var dd =a.b.c.d.d1;
    arr[0] = dd;
    arr[1] = dd;
    arr[2] = dd;
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

