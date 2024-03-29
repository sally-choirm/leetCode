/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    //2차원 배열 [[false,false,false],[false,false,false],[false,false,false]]
    const check=Array(matrix.length).fill(false).map(()=>new Array(matrix[0].length)); 
  
    function change(x,y){
        for(let j=0;j<matrix[x].length;j++){
            if(matrix[x][j]!==0) {
                matrix[x][j]=0;
                check[x][j]=true;
            }
        }
        
       for(let j=0;j<matrix.length;j++){
           if(matrix[j][y]!==0) {
               matrix[j][y]=0;   
               check[j][y]=true;
            }                 
        }
    }
  
    for(let i=0;i<matrix.length;i++){
      for(let j=0;j<matrix[i].length;j++){
          if(!check[i][j] && matrix[i][j]===0){
              change(i,j);
          };
      }
    }
};