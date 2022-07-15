/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let result=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]){
                if(!grid[i][j+1]) result++; // right
                if(!grid[i][j-1]) result++; // left
                if(!grid[i-1] || !grid[i-1][j]) result++; // top
                if(!grid[i+1] || !grid[i+1][j]) result++; // bottom
            }
        }
    }
    return result;
};