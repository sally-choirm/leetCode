/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permutations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, index) => index !== idx);
    const perms = permutations(rest, n - 1);
    const combine = perms.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}
var permute = function(nums) {
    return permutations(nums,nums.length);
};