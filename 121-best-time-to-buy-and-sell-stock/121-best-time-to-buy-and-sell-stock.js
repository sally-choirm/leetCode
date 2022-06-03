/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
    let minValue=prices[0];
    let result=0;
    for(let i=1;i<=prices.length-1;i++){
        minValue = Math.min(minValue, prices[i]);
        result=Math.max(prices[i]-minValue, result);
    }
    return result;
};