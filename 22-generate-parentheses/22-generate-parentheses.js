/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result=[];
    generate([],0,0);
    return result;
    
    function generate(A,left,right){
        if(A.length===n*2){
            result.push(A.join(""));
            return;
        }
        if(left<n){
            A.push("(");
            generate(A,left+1,right);
            A.pop();
        }
        if(right<left){
            A.push(")");
            generate(A,left,right+1);
            A.pop();
        }
    }
};