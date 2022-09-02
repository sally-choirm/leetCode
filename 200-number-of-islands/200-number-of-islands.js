/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let check = Array.from(Array(grid.length), () => new Array(grid[0].length).fill(false));
    let dx = [0,-1,0,1];
    let dy = [1,0,-1,0];
    let island=0;
    let queue=[];
    
    function bfs(){
        while(queue.length>0){
        let [x,y] = queue.pop();
        for(let i=0;i<4;i++){
            let xx = x+dx[i];
            let yy = y+dy[i];

            if(xx<0 || xx>grid.length-1 || yy<0 || yy>grid[0].length-1) continue;
            if(grid[xx][yy]==='1' && !check[xx][yy]){
                check[xx][yy]=true;
                queue.push([xx,yy]);
            }
        }    
    }
   }  
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==='1' && !check[i][j]){
                queue.push([i,j]);
                check[i][j]=true;
                bfs();
                island++;
            }
        }
    }
    return island;
};