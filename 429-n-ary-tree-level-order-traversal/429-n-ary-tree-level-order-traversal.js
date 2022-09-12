/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  
    if(root == null) return [];

    const queue = [];
    queue.push(root);
    const ans = [];
    
    while(queue.length>0){
        const lvlLen = queue.length;
        const lvlArr=[];
        
        for(let i=0;i<lvlLen;i++){
            const curr = queue.shift();
            
            lvlArr.push(curr.val);
            for(let child of curr.children){
                queue.push(child);
            }
        }
        ans.push(lvlArr);
    }
    return ans;
};