/**
 * 实现 九九乘法表 --for循环 
 * huanghui 20180510
 */
function multipyFn1(){
    var str = '';
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <=i; j++) {
            str  += j + 'X' + i +'=' + i*j +" "; 
        }
        str +='\n';
    }
    console.log(str);  
};
multipyFn1();
 
/**
 * 实现 九九乘法表 -- 递归
 * huanghui 20180510
 */
var str2 = '';
function multipyFn2(n){
    if(n==1){
        str2 +='1*1=1 \n' ;
    }else{
        multipyFn2(n-1);
        for (var i = 1; i <= n; i++) {
            str2 += i + '*' + n +'=' + i*n +' ';
        }
        str2 += '\n' ;
    }
}
multipyFn2(9);
console.log(str2);