/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const vx =[-1,1,0,0]
    const vy = [0,0,1,-1];
    const check = Array.from(Array(board.length), () => Array(board[0].length).fill(false))

    let dfs = (x,y) =>{
        check[x][y]=true;
        for(let i=0;i<4;i++){
            let xx = x+vx[i];
            let yy = y+vy[i];
            if(xx<=0 || xx>=board.length || yy<=0 || yy>=board[0].length ) continue;
            if(!check[xx][yy] && board[xx][yy]=='O') dfs(xx,yy);
        }
    }
    
    for(let i=1; i<board[0].length-1;i++){
        if(board[0][i] === 'O' && !check[0][i]) {
            dfs(0,i); 
        }   
    }
    
    for(let i=1; i<board.length-1;i++){
        if(board[i][0] === 'O' && !check[i][0]) {
            dfs(i,0);   
        } 
    }
    
    for(let i=1; i<board[0].length-1;i++){
        if(board[board.length-1][i] === 'O' && !check[board.length-1][i]) {
            dfs(board.length-1,i);    
        }
    }
    
    for(let i=1; i<board.length-1;i++){
        if(board[i][board[0].length-1] === 'O' && !check[i][board[0].length-1]) dfs(i,board[0].length-1);    
    }
    
    for(let i=1;i<board.length-1;i++){
        for(let j=1;j<board[0].length-1;j++){
            if(!check[i][j] && board[i][j]==='O') {
                board[i][j]='X';
                console.log(i,j)
            }
        }
    }
};