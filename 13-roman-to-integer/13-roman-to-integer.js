/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbol = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
        "IV":4,
        "IX":9,
        "XL":40,
        "XC":90,
        "CD":400,
        "CM":900
    }
    let result = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='I'){
            if(s[i+1]==='V') {
                result+=symbol['IV'];
                i+=1;
            } else if(s[i+1]==='X'){
                result+=symbol['IX'];
                i+=1;
            }else {
                result+=symbol['I'];
            }
        } else if(s[i]==='X'){
                if(s[i+1]==='L') {
                result+=symbol['XL'];
                i+=1;
            } else if(s[i+1]==='C'){
                result+=symbol['XC'];
                i+=1;
            }else {
                result+=symbol['X'];
            }
        }else if(s[i]==='C'){
            if(s[i+1]==='D') {
                result+=symbol['CD'];
                i+=1;
            } else if(s[i+1]==='M'){
                result+=symbol['CM'];
                i+=1;
            }else {
                result+=symbol['C'];
            }
        }else {
            result+=symbol[s[i]];
        }
        
    }
    return result;
    
};