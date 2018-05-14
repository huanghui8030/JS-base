/**
 * 实现 九九乘法表
 */
(function(){
    var str = '';
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <=i; j++) {
            str  += j + 'X' + i +'=' + i*j +" "; 
        }
        str +='\n';
    }
    console.log(str);  
})();