/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result=new Array(n+1).fill(0);
    for(let i=0;i<=n;i++){
        let num = i;
        let binary = num.toString(2);
        let sum=0;
        for(let i=0;i<binary.length;i++){
            sum+=Number(binary[i]);
        }
        result[i]=sum;
    }
    return result;
};