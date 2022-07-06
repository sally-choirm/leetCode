/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let bin = n.toString(2);
    let len = 32-bin.length;
    for(let i=0;i<len;i++){
        bin='0'+bin;
    }
    const reverseBit =bin.split("").reverse().join("");
    return parseInt(reverseBit,2);
};
