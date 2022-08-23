/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const arr =[[1],[1,1],[1,2,1]];
    
    if(arr[rowIndex]) return arr[rowIndex];
    
    else{
        for(let i=3;i<=rowIndex;i++){
            let arr1=[];
            for(let j=0;j<=rowIndex;j++){
                if(j==0 || j==i) arr1.push(1);
                else {

                    let val = arr[i-1][j-1]+arr[i-1][j];
                    console.log(i,j,rowIndex,val);
                    arr1.push(val);
                }
            }
            arr.push(arr1);
            console.log(arr);
        }
    }
    return arr[rowIndex];
};