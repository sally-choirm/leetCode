/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr = new Array(n).fill('');
    
    for(let i=1;i<=n;i++){
        if(i%3==0 || i%5==0){
          if(i%3==0) arr[i-1]+="Fizz";
          if(i%5==0) arr[i-1]+="Buzz";
        } else arr[i-1]=i.toString();
    }
    return arr;
    
};