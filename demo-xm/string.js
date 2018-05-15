/**
 * 一个函数stringconcat， 要求能
var result1 = stringconcat("a", "b")  result1 = "a+b"
var stringconcatWithPrefix = stringconcat.prefix("hellworld");
var result2 = stringconcatWithPrefix("a", "b")  result2 = "hellworld+a+b"
 * huanghui 20180515
 */
//第一个方法
function stringconcat(a,b){
    return a + '+' + b;
}
//另一种解法
function stringconcat1(){
    return Array.prototype.join.call(arguments, '+');
}
var result1 = stringconcat("a", "b") ;

console.log(result1); //a+b


//第二个方法
stringconcat.prefix = function(str){
    var that = this;
    return function () {
        // 把str加入到arguments的前面
        Array.prototype.unshift.call(arguments, str);
        return that.apply(null, arguments);
    }
}

var strPrefix = stringconcat.prefix("hellworld");
//console.log('strPrefix:'+strPrefix);

var result2 = strPrefix("a", "b") ;
console.log('result2:'+result2);//result2:hellworld+a

