/**
 * 返回这个二维数组中的所有最大值的数组
 * 已知一个二维数组：
 *     [[2,5,123,63,76],[23,6,79,10],[10,74,888,102],[9999,1042,3]]
 * 返回：[ 123, 79, 888, 9999 ]
 */

var arr = [[2,5,123,63,76],[23,6,79,10],[10,74,888,102],[9999,1042,3]];

//最优的方法：apply/bind方法
function fn1(arr){
    return arr.map(Function.prototype.apply.bind(Math.max,null)); 
};
console.log(fn1(arr));//[ 123, 79, 888, 9999 ]

//中等方法：reduce方法（ES5，ie8+）
function fn2(arr){
    return arr.map(function(value){
        return value.reduce(function(prev,curr){
            return prev > curr ? prev : curr ;
        });
    });
}
console.log(fn2(arr));//[ 123, 79, 888, 9999 ]


