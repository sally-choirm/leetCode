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
var levelOrderBottom = function(root) {
    let queue = [root];
    let result =[];
    if(!root) return result;
    
    while(queue.length>0){
        let a =[];
        let n = queue.length;
        for(let i=0;i<n;i++){
            let q = queue.pop();
            a.push(q.val);
            if(q.left!==null) queue.unshift(q.left);
            if(q.right!==null) queue.unshift(q.right);
        }
        result.push(a);
    }
    return result.reverse();
};