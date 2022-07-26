/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    for(let i=0;i<s.length;i++){
        let reverseStr = s.slice(i).concat(s.slice(0,i));
        if(reverseStr === goal) return true;
    }return false;
};