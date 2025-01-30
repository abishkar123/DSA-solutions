var maxDepth = function(root) {
    if (root === null) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return 1 + Math.max(left, right);
}

// time complexity is 0(n) where n is the number of nodes in the tree
// space complexity is 0(n)