/**
 * 1. Two Sum : https://leetcode-cn.com/problems/two-sum/description/
 * 
    给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
    你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
    示例:
    给定 nums = [2, 7, 11, 15], target = 9
    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var newArr = [];
    for (var i = 0,len = nums.length; i < len; i++) {
        var otherNum = target - nums[i];
        newArr.push(i);
        for (var j = i+1 ; j < nums.length; j++) {
            if(otherNum==nums[j]){
                newArr.push(j);
            }
        }
        if(newArr.length ===2){
            console.log(newArr)
            return newArr;
        }else{
            newArr = [];
        }
    }
    return [];  
};
/*twoSum([2, 7, 11, 15],9);
twoSum([0,0,1,2,3],0);
twoSum([-1,-2,-3,-4,-5],-8);*/

//更简洁高校的方法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumEasy = function(nums, target) {
    let numsObj = {};
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let match = target - current;
        //console.log(i,current,match,numsObj);
        if (match in numsObj) {
            console.log("最后输出："+JSON.stringify(numsObj));
            return [numsObj[match],i];
        } else {
            numsObj[current] = i;
        }   
    }
};
twoSumEasy([2,3,4,5],5);
