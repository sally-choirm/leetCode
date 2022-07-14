/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let arr = ransomNote.split("");
    for(let i=0;i<arr.length;i++){
        if(!magazine.includes(arr[i])){
            return false;
        }
        magazine=magazine.replace(arr[i],"");
    }
    return true;
};