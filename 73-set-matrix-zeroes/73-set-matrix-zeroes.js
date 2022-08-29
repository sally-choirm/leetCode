/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
        const check = [];

    function change(x,y){
        for(let j=0;j<matrix[x].length;j++){
            if(matrix[x][j]!==0) {
                matrix[x][j]=0;
                check[x][j]=true;
            }
        }
        
       for(let j=0;j<matrix.length;j++){
          console.log(matrix[j][y]);
           if(matrix[j][y]!==0) {
               matrix[j][y]=0;   
               check[j][y]=true;
            }                 
        }
    }
    for(let i=0;i<matrix.length;i++){
        check[i]=[];
      for(let j=0;j<matrix[i].length;j++){
          check[i][j]=false;
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