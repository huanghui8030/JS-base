/**
 * 类数组：
 * 1、必须有length属性
 * 2、包含的属性必须是Number或可以转为Number的类型。
 */
//类数组转数组
var arrlike = {'1':'张三','2':'李四','3':'王五','name':'赵六','type':'1231',length :6 };
console.log(arrlike);
console.log(arrlike['1'],arrlike[1],arrlike['name']);


