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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

    if(!root) return [];
    const output = [];
    
    const dfs = (root, path='') => {
        if(!root) return;
        
        dfs(root.left, path+root.val+'->');
        dfs(root.right, path+root.val+'->');
        
        if(!root.left && !root.right) output.push(path+root.val);
    }
    dfs(root);
    return output;
};