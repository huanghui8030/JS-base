/**
 * 796. Rotate String ：https://leetcode.com/problems/rotate-string/description/
 * 判断是否传反转是否正确。
 * Example 1:
    Input: A = 'abcde', B = 'cdeab'
    Output: true

 * Example 2:
    Input: A = 'abcde', B = 'abced'
    Output: false
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean} 开发版本
 * huanghui 20180514
 */
var a = '',
    b = '';
(function(A, B){
    if(A.length!=B.length){
        console.log(false);
        return false;
    }
    if(A===''){
        console.log(true);
        return true;
    }
    for (var i = 0; i < B.length; i++) {
        if(A.charAt(0) === B.charAt(i)){
            var newStr = B.substring(i,B.length)+B.substring(0,i);
            console.log(newStr);
            if(newStr==A){
                console.log(true);
                return true;
            }
        }
    }
    console.log(false);
    return false;
})(a,b);


//简化版
(function(A, B){
    if(A.length!=B.length){ return false }
    if(A===''){ return true }
    for (var i = 0; i < B.length; i++) {
        if(A.charAt(0) === B.charAt(i)){
            var newStr = B.substring(i,B.length)+B.substring(0,i);
            if(newStr==A){ return true; }
        }
    }
    return false;
})(a,b);
