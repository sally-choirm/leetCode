/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anaMap = new Map();
    for(let i=0;i<strs.length;i++){
       const str = strs[i].split('').sort().join('');
       if(anaMap.has(str)){
           anaMap.set(str,[...anaMap.get(str), strs[i]]);
       }else{
           anaMap.set(str,[strs[i]]);
       }
   } 
    let result =[];
    for(let a of anaMap.values()){
        result.push(a);
    }
    result.sort((a,b)=>a.length-b.length);
    return result;
}; 