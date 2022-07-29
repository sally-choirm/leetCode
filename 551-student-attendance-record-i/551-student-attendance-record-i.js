/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let ab = 0;
    let la = 0;
    if(s.includes('LLL')) return false;
    for(let i=0;i<s.length;i++){
        if(s[i]==='A') ab++;
        if(ab>=2) return false;
    }
    return true;
};