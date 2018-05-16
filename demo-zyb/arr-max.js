/*
 * 求数组最大或最小值
 * huanghui 20180513
 */
var arr = [2,13,15,2,19,43]

var maxN = Math.max.apply(Math,arr);

var minN = Math.min.apply(null,arr)

console.log("数组最大值："+ maxN);
console.log("数组最小值："+ minN);

//正常的Math.max(a,b,c...)，中只接受实际的数字。
console.log(Math.max(5,7,23),Math.max.call(Math,arr[0],arr[1],arr[2]));


