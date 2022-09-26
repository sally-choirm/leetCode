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
var countNodes = function(root) {
    
    let rt = [root];
    if(!root) return 0;
    let cnt =0;
    while(rt.length){
        let node = rt.pop();
        if(!node) return;
        cnt++;
        if(node.left){
             rt.push(node.left);
        }
        if(node.right){
             rt.push(node.right);
        }
    }
    return cnt;
};