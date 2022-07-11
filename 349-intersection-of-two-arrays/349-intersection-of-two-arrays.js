/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const result=[];
    
    for(let i=0;i<nums1.length;i++){
        if(nums2.indexOf(nums1[i])!==-1 && !result.includes(nums1[i])){
            result.push(nums1[i]);
        }
    }return result;
};