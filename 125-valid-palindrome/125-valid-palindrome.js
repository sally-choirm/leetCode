/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let ss =''

    for(let i=0;i<s.length;i++){
        let x = s[i];
        let ascii_code = x.charCodeAt(0);
        if(ascii_code>=47&&ascii_code<=57){
            ss+=x;
        }
        if(ascii_code>=65&&ascii_code<=90){
            ss+=x.toLowerCase();
        } else if(ascii_code>=97&&ascii_code<=122){
            ss+=x;
        }
    }
    for(let i=0;i<parseInt(ss.length/2);i++){
        if(ss[i]!=ss[ss.length-i-1]) return false;
    }
    return true;
};