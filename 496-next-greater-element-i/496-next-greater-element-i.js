/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result=[];
    for(let i=0;i<nums1.length;i++){
        let flag = false;
        let idx = nums2.indexOf(nums1[i]);
        if(idx!==-1){
            for(let j=idx;j<nums2.length;j++){
                if(nums2[j]>nums2[idx]) {
                    flag = false;
                    result.push(nums2[j]);
                    break;
                }
                flag = true;
            }
        }
        if(flag) result.push(-1);
    }
    return result;
};