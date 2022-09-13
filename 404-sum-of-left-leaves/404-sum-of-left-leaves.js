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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum=0;
    const dfs = (node, position) =>{
        if(!node) return;
        if(position==='left' && !node.left && !node.right) sum+=node.val;
        dfs(node.left,'left');
        dfs(node.right,'right');
    }
    dfs(root);
    return sum;
};