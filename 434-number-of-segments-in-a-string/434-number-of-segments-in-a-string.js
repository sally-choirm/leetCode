/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s.length===0 )return 0;
    const splitS = s.split(" ");
    let result =0;
    for(let i=0;i<splitS.length;i++){
        console.log(i, splitS[i]);
        if(splitS[i]!="") result++;
    }
    return result;
};