/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let alen=a.length;
    let blen =b.length;
    
    let max = alen>blen? alen:blen;
    let res =''
    let cal =0;
    let val=0;
    for(let i=0; i<max; i++){
        val = Number(a[alen-i-1]|| 0)+Number(b[blen-i-1] ||0) +cal
        cal =parseInt(val/2);
        res=val%2+res;
    }
    if(cal) {
        console.log('cal==',cal);
        res=1+res;
    }
    return res;
};