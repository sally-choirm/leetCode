/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map={};
    
    for(let i=0;i<nums.length;i++){
        if(!map[nums[i]]) map[nums[i]]=1;
        else map[nums[i]]++;
    }
    for(let key in map){
        if(map[key] >= nums.length/2) return key;    
    }
};