/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let move = moves.split("");
    
    let RL=0;
    let UD=0;
    for(let i=0;i<move.length;i++){
        if(moves[i]==='R') RL++;
        else if(moves[i]==='L')RL--;
        if(moves[i]==='U')UD++;
        else if(moves[i]==='D') UD--;
    }
    return RL===0 && UD===0;
};