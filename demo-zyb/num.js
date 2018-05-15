/**
 * 求x的y次方-递归实现
 * huangh 20180515
 */
function f(x,y){
    if(y==0){
        return 1;
    }
    return f(x,y-1)*x;
}
var sun = f(3,4);
console.log("求x的y次方-递归实现："+sun);

var arr = [2,13,15,2,19,43]
console.log("数组最大值："+Math.max.apply(Math,arr));//apply
console.log("数组最小值："+Math.min.apply(null,arr));

console.log(Math.max(5,7,23),Math.max.call(Math,arr[0],arr[1],arr[2]));
console.log(Math.round(5.55),Math.ceil(5.555),Math.floor(5.55),Math.random());
