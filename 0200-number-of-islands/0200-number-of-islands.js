/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const vx =[1,-1,0,0];
  const vy =[0,0,1,-1];
  const check = Array.from(Array(grid.length), () => Array(grid[0].length).fill(false));
  let result =0;

 function dfs(x,y){
      check[x][y]=true;
        for(let i=0;i<4;i++){
            let xx = vx[i]+x;
            let yy = vy[i]+y;
            if(xx<0 || xx>=grid.length || yy<0 || yy>=grid[0].length) continue;
            if(grid[xx][yy]==="1" && !check[xx][yy]) dfs(xx,yy);
        }
    }
  
  for(let i=0;i<grid.length;i++){
      for(let j=0;j<grid[i].length;j++){
          if(!check[i][j] && grid[i][j] === "1"){
              dfs(i,j);
              result++;
          }
      }
  }
    return result;
};