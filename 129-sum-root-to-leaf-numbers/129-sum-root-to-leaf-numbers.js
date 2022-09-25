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
var sumNumbers = function(root) {
    
    let rest = [];
    function recur(root, curArr){
        if(root === null) return 0;
        curArr.push(root.val);
        if(!root.right && !root.left) {
            rest.push(curArr.join(''));
        }
        recur(root.left, curArr);
        recur(root.right, curArr); 
        curArr.pop();
    } 
    recur(root,[]);
    let result = 0;

    for(let i=0;i<rest.length;i++){
        result+=Number(rest[i]);
    }
    return result;
};