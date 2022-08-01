/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let result=[];
    for(let i=0;i<ops.length;i++){
        if(ops[i]==='C'){
            result.pop();
        }else if(ops[i]==='D'){
            result.push(result[result.length-1]*2);
        }else if(ops[i]==='+'){
            result.push(result[result.length-1]+result[result.length-2]);
        } else{
            result.push(Number(ops[i]));
        }
        console.log(result);
    }
    if(result.length===0) return 0;
    else{
        let sumR=0;
        for(let i=0;i<result.length;i++){
            sumR+=result[i];
        }
        return sumR;
    }
};