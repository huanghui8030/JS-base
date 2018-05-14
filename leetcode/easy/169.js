/**
 * 169. Majority Element : https://leetcode.com/problems/majority-element/description/
 * 获取一个数组中个数大于数组长度一般的那个数字。
 * Example 1:
	Input: [3,2,3]
	Output: 3
	Example 2:

	Input: [2,2,1,1,1,2,2]
	Output: 2
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
(function(nums) {
    var len = nums.length;
    var newArr = [...new Set(nums)];
    var lenArr = nums.length - newArr.length;
    for (var i = 0,newLen=newArr.length ; i < newLen ; i++) {
    	
    	var count = 0;
    	for (var j = 0 ; j < len ; j++) {
    		if(newArr[i] === nums[j]){
    			count ++;
    		}
    	}
    	//console.log(i,count);
    	if(count > len/2){
    		console.log("结果："+newArr[i] );
    		return newArr[i] 
    	}
    }
})( [3,2,3,2,2,2,3]);