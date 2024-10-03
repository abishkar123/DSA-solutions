/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let behind = dummy, ahead = dummy;

    for (let i = 0; i <= n; i++) {
        ahead = ahead.next;
    }

    while (ahead) {
        behind = behind.next;
        ahead = ahead.next;
    }

    behind.next = behind.next.next;

    return dummy.next;
}