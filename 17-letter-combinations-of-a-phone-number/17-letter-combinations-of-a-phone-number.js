/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const phone={
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    }
    let result =[];
    
    for(const digit of digits){
        const charCases = phone[digit];
        
        if(result.length===0){
            result = result.concat(charCases);
            continue;
        }
        const newResult=[];
        for(const resultString of result){
            for(const charCase of charCases){
                newResult.push(resultString+charCase);
            }
        }
        result=newResult;
    }
    return result;
};