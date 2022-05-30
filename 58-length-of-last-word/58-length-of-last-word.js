/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let splitS = s.split(" ");
    let filterS = splitS.filter((data)=> data!='');
    console.log(filterS)
    return filterS[filterS.length-1].length;
};