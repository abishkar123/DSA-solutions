/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

var copyRandomList = function(head) {
    if (!head) return null;

    const oldToNew = new Map();
    let curr = head;

    
    while (curr) {
        oldToNew.set(curr, new Node(curr.val));
        curr = curr.next;
    }

    // Second pass: set next and random pointers
    curr = head;
    while (curr) {
        const newNode = oldToNew.get(curr);
        newNode.next = oldToNew.get(curr.next) || null;
        newNode.random = oldToNew.get(curr.random) || null;
        curr = curr.next;
    }

    return oldToNew.get(head);
};

