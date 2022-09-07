/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let result =[];
    function recur (node) {
        if(!node) return null;
        if(node.left !== null) recur(node.left);
        if(node.right!==null)recur(node.right);
        result.push(node.val);
    }
    recur(root);
    return result;
};