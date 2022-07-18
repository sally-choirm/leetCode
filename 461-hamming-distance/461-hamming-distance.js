/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const xOr = x^y;
    return xOr.toString(2).replace(/0/g,'').length;
};