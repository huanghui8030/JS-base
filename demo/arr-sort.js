/**
 * 有序数组
 * Input:
    nums1 = [-1,0,0,3,3,3,0,0,0], m = 6
    nums2 = [2,5,6],       n = 3
 * Output: [-1,0,0,1,2,2,3,3,3]，返回nums1
 */
(function (nums1,m,nums2,n){
    var len1 = nums1.length,
        len2 = nums2.length;
    if(len1!=m){
        nums1.splice(m,nums1.length-m);
    }
    if(len2!=n){
        nums2.splice(n,nums2.length-n);
    }
    Array.prototype.push.apply(nums1,nums2);
    //console.log(nums1);
    nums1.sort(function(x,y){
        return x-y;
    });
    console.log(nums1);
})([0,0,3,0,0,0,0,0,0],3,[-1,1,1,1,2,3],6)