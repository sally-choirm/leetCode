/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let intFive = num.toString(2).split("");
    for(let i =0;i<intFive.length;i++){
        intFive[i]==='0'? intFive[i]='1':intFive[i]='0';
    }    
    return parseInt(intFive.join(""),2);
};