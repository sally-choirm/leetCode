/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
   
    if(nums.length===1)return new TreeNode(nums[0]);
    if(nums.length===0)return null;
    
    let mid = Math.floor(nums.length/2);
    let midTree = new TreeNode(nums[mid]);
    
    let leftTree = nums.slice(0,mid);
     midTree.left = sortedArrayToBST(leftTree);
    
    
    let rightTree = nums.slice(mid+1, nums.length);
    midTree.right = sortedArrayToBST(rightTree);
    
    return midTree;
};