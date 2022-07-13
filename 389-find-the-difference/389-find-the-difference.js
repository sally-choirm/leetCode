/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let splitS = s.split("").sort();
    let splitT = t.split("").sort();
    for(let i=0;i<splitT.length;i++){
        if(splitS[i]!=splitT[i]) return splitT[i];
    }
    
};