/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    let setArr=new Set([...nums]);
    let newArr=[...setArr];
    const result =[];
    for(let i=1;i<=nums.length;i++){
        if(!newArr.includes(i)) result.push(i);
    }
    return result;
};