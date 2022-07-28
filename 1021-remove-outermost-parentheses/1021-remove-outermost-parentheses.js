/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let left=0;
    let right=0;
    let result=[];
    let index =0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='(') left++;
        else if(s[i]===')')right++;
        
        if(left===right) {
           let cut = s.slice(index,i+1);
            result.push(cut);
             index=i+1;
        }
    }
    for(let i=0;i<result.length;i++){
        result[i] = result[i].slice(1,-1);
    }
    return result.join("");
};