/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr = n.toString().split("");
    let mul = 1;
    let sum = 0;
    
    for(let i=0;i<arr.length;i++){
        let n = Number(arr[i]);
        mul*=n;
        sum+=n;
    }
    return mul-sum;
};