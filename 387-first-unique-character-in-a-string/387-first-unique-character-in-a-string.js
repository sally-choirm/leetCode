/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let i =0; i<s.length;i++){
        if(s.lastIndexOf(s[i])!=i || s.indexOf(s[i])!==i) continue;
        else return i;
    }
    return -1;
};