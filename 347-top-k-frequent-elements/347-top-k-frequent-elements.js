/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let arr ={};
    let result=[];
    for(let num of nums){
        if(arr[num]===undefined) arr[num]=1;
        else arr[num]++;
    }
    arr = Object.entries(arr).sort((a,b)=>b[1]-a[1]);
    for(let i=0;i<k;i++){
        result.push(arr[i][0]);
    }
    return result;
};