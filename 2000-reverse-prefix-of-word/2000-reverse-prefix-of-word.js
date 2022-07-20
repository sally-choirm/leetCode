/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch);
    let reverseStr=word.substring(0, idx+1);
    let str = word.substring(idx+1,word.length);
    return reverseStr.split("").reverse().join("")+str;
};