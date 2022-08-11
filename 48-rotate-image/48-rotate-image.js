/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const result=[];
    for(const m of matrix) result.push([]);
    for(let i=0;i<matrix.length;i++){
            for(let j=matrix[i].length-1;j>=0;j--){
                result[i].push(matrix[j][i]);
            }
        }
    for(let i=0;i<matrix.length;i++){
        matrix[i]=result[i];
    }
};