/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];
    
    for(let i=0;i<nums.length;i++){
        let arr=[];
        for(let j=0;j<res.length;j++){
            let test = res[j].slice();
            test.push(nums[i]);
            arr.push(test);
        }
        res =[...res,...arr];
    }
    return res;
};