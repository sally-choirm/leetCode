/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let ma = ['a','e','i','o','u'];
    
    let splitSentence = sentence.split(' ');
    for(let i=0;i<splitSentence.length;i++){  
        if(ma.includes(splitSentence[i][0].toLowerCase())){
            splitSentence[i]=splitSentence[i]+'ma';
            splitSentence[i]= splitSentence[i]+'a'.repeat(i+1);
        } else{
            let first = splitSentence[i][0];
            splitSentence[i]=splitSentence[i].replace(splitSentence[i][0],'');
            splitSentence[i]=splitSentence[i]+first+'ma'+'a'.repeat(i+1);
        }
    }
    return splitSentence.join(' ');
};