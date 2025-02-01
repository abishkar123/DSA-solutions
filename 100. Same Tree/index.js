var isSameTree = function(p, q) {
    if (!p && !q) return true; // Both nodes are null, so they are the same
    if (!p || !q || p.val !== q.val) return false; // One is null or values don't match

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


// time complexity: 0(n)
// space complexity: 0( n +m)
