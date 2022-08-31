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
 * @return {number[][]}
 */
var levelOrder = function(root){
    if(root === null) return [];
    
    const res = [];
    const queue = [root];
    console.log(root);
    while(queue.length>0){
        let n = queue.length;
        let level =[];
        
        for(let i=0;i<n;i++){
            let node = queue.pop();
            level.push(node.val);

            if(node.left !== null) {
                queue.unshift(node.left);
                
            }
            if(node.right !== null) {
                queue.unshift(node.right);
            }
        }
        res.push(level);
    }
    return res;
};