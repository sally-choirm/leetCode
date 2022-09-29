/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  var res = [0];
  var len = 1;

  for (var i = 0; i < n; i++) {
    len = res.length;
    for (var j = len - 1; j >= 0; j--) {
      res.push(res[j] + len);
    } 
  }

  return res;
};
