/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let num1N=BigInt(num1);
    let num2N=BigInt(num2);
    return (num1N+num2N).toString();
};