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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return hasSum(root, targetSum, 0)
    
};

 function hasSum(node, targetSum, currentSum){
    if(node === null) return false

    currentSum +=node.val;

    if(node.left===null && node.right ===null){
        return currentSum === targetSum
    }

    return hasSum(node.left,  targetSum ,currentSum)|| hasSum(node.right, targetSum,currentSum)


 }