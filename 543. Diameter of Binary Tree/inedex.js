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
var diameterOfBinaryTree = function(root) {
    let largestdiameter = 0;


  function height(node){
  if (node === null){
     return 0
  } 

  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  const diameter = leftHeight + rightHeight

   largestdiameter = Math.max(largestdiameter, diameter);

  return 1 + Math.max(leftHeight, rightHeight)

  }

  height(root)

  return  largestdiameter
  }


  // time compelexity is 0(n) and sapce complexity is 0(h) where h is the height of the root node