/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let dp=[];
    if(numRows===1)return [[1]];
    else if(numRows===2)return [[1],[1,1]];
    
    dp[0] = [1];
    dp[1] = [1,1];
    for(let i=2;i<numRows;i++){
        dp[i]=[];
        for(let j=0;j<=i;j++){
            if(j==0||j==i) dp[i][j]=1;
            else dp[i][j]=dp[i-1][j-1]+dp[i-1][j];
        }
    }
    return dp;   
}; 
