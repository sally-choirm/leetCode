/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     if(nums.length === 1) return nums[0];
    
    let result = [];
    nums.sort((a, b) => a - b);
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i-1] && nums[i] !== nums[i+1]) {
            result.push(nums[i]);
        }
    }
    
    return result[0];
};