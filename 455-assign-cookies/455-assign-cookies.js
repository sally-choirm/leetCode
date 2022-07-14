/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let gg = g.sort((a,b) => a-b);
    let ss = s.sort((a,b) => a-b);
    let result=0;
    let lt=0; let rt=0;
    while(lt!==gg.length && rt !==ss.length){
        if(ss[rt]>=gg[lt]){
            lt++;
            rt++;
            result++;
        }
        else if (gg[lt]>ss[rt]){
            rt++;
        }
    }
    return result;
};