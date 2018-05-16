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
var sun = f(3,4); //81

console.log("求x的y次方-递归实现："+sun);
