/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let splitS = s.split(" ");
    let filterS = splitS.filter((data)=> data!='');
    return filterS[filterS.length-1].length;
};