/**
 * 如何在函数外面引用内部变量  ---闭包的实际用例
 * 
 */

//方法一：构造器中a，定义为this.a
function Fn1(arg1){
    this.a = arg1 || '我在fn1里面';
}
var myFn1 = new Fn1();
console.log(myFn1.a);


//方法二：原型中，在另一个防范中调用了Fn1里面的参数a
Fn1.prototype.b = function(str){
    return this.a + str;
};
console.log(myFn1.b('我是b参数，也被调用了。'));


//
var myObject = {
    value :100
}
myObject.getValue = function (){
    console.log("内部value："+this.value);
    return this.value;
}
console.log(myObject.getValue());
console.log(myObject);


