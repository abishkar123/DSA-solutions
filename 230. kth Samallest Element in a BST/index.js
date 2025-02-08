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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    let ans= 0;
    let count = k

    function defs(node){
        if(!node) return null

       defs(node.left)

       if(count=== 1){
         ans = node.val
       }

       count -- 
       if(count > 0){
        defs(node.right)
       }

    }

    defs(root)
    return ans
    
};

// time complexit is 0(n)
// sapce complexity is 0(n) becuase of stack