/**
 * @param {number} n
 * @return {number}
 */
let dp =[];

dp[1]=1;
dp[2]=2;

var climbStairs = function(n) {
    if(dp[n]) return dp[n];
    return  dp[n] = climbStairs(n-1)+climbStairs(n-2);
    
};