/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
     const result=[];
    const alpha = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    for(let i =0;i<words.length;i++){
        let str ="";
        for(let j=0;j<words[i].length;j++){
            str+=alpha[words[i].charCodeAt(j)-97];
        }
        if(!result.includes(str)) result.push(str)
    }
    return result.length;
};