var a = [2,5,10,20];

//数组求和
var sun = a.reduce(function(x,y){
	return x + y;
});
console.log(sun);//37

//数组求积
var product = a.reduce(function(x,y){
	return x*y;
},11);
console.log(product); //2000*11 = 2200

//数组最大值
var max = a.reduce(function(x,y){
	return x>y ? x : y ;
});
console.log(max);//20

//数组最小值
var min = a.reduce(function(x,y){
	return x>y ? y : x ;
});
console.log(min);//2

