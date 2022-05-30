/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let palin=0;
    let xx=x;
    if(xx<0)return false;
    while(xx>0){
       palin=(palin*10)+(xx%10);
        xx=parseInt(xx/10);
           
    }
    if(palin==x)return true;
    else return false;
};