/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depth=0;
    
    function dfs(node, len){
        if(!node) return null;
        depth = Math.max(len, depth);
        for(let i=0; i<node.children.length;i++)
        dfs(node.children[i], len+1);
        
    }
    dfs(root,1);
    return depth;
};