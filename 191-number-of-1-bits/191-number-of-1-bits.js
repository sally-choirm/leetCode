/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let changeNum = n.toString(2);
    return changeNum.split("0").join("").length;
};