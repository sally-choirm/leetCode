/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const F =[];
    F[0]=0;
    F[1]=1;
    let fibRecur = (num) =>{
        if(num===1 || num===0) return F[num];
        else if(F[num])return F[num];
        else return F[num] = fibRecur(num-1)+fibRecur(num-2);
    }
   return fibRecur(n);
};