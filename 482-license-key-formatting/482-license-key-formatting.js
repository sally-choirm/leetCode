/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let test = s.split('-');
    let test1 = test.join('');
    let test2 = test1.split('');
    
    let result ='';
    let sum=0;

    for(let i=test2.length-1;i>=0;i--){
        if(sum+1 === k && i!==0){
            result=test2[i].toUpperCase()+result;
            result='-'+result;
            sum=0;
            continue;
            }
        else result=test2[i].toUpperCase()+result;
        sum++;
    }
    return result;
};