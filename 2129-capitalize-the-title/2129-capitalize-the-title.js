/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const splitStr = title.split(" ");
    let result ="";
    for(let i=0;i<splitStr.length;i++){
        if(splitStr[i].length>2){
            result+=splitStr[i][0].toUpperCase();
            result+=splitStr[i].substring(1).toLowerCase();
        }else{
            result+=splitStr[i].toLowerCase();
        }
        if(i+1!==splitStr.length) result+=' ';

    }
    return result;
};