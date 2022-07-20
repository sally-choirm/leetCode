/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let capitalStatus =false;
    let capitalCount=0;
    for(let i=0;i<word.length;i++){
        if(word[i]>='A' && word[i]<='Z'){
            if(capitalStatus){
                return false; // 소문자가 나오다가 대문자가 나올경우 
            }
            else capitalCount++;
        }
        else{
             capitalStatus = true;
        }
    }
    return capitalCount <= 1 || !capitalStatus;
};