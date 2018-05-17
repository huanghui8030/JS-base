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


//方法一（call、apply的应用）
stringconcat.prefix = function(str){
    var that = this;
    return function () {
        // 把str加入到arguments的前面
        Array.prototype.unshift.call(arguments, str);
        return that.apply(null, arguments);
    }
}
var strPrefix = stringconcat.prefix("hellworld");
var result2 = strPrefix("a", "b") ;
console.log('第一种方法:'+result2);//result2:hellworld+a


//方法二（常用的实现方式）：
stringconcat.prefix2 = function(str){
    var str = str;
    return function (a,b) {
        var newStr  = str +'+' +a +'+' + b
        return newStr;
    }
}
//调用
var strPrefix2 = stringconcat.prefix2("hellworld");
var result21 = strPrefix2("a", "b") ;
console.log('第二种方法:'+result21);//第二种方法:hellworld+a+b

