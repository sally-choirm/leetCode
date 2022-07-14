/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let test = new Set(nums);
    let arr = [...test];
    
    arr = arr.sort((a,b)=>b-a);
    if(arr.length<3){
        let max=-1;
        for(let i=0;i<arr.length;i++){
            if(max<arr[i]) max=arr[i];
        }
        return max;
    }else return arr[2];
};