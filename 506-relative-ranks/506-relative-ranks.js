/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let rank = ["Gold Medal","Silver Medal","Bronze Medal"];
    let arr = [...score];
    let result =[];
    arr.sort((a,b)=>b-a);
    for(let i=0;i<arr.length;i++){
        let idx = score.indexOf(arr[i]);
        if(i<3) result[idx] = rank[i];
        else result[idx]=String(i+1);
    }
    return result;
};