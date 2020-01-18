/**
 * 25. Reverse Nodes in k-Group [HARD]
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 *
 * Example:
 * Given this linked list: 1->2->3->4->5
 * For k = 2, you should return: 2->1->4->3->5
 * For k = 3, you should return: 3->2->1->4->5
 *
 * Note:
 * Only constant extra memory is allowed.
 * You may not alter the values in the list's nodes, only nodes itself may be changed.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // check if list or k is empty
    if (head === null || head.next === null || k === 0) {
        return head;
    }

    let tail = head;

    // Check if list length is not small than k, then assign first k nodes to tail
    for (let i = 0; i < k - 1; i++) {
        tail = tail.next;

        // if head length is small than k, return head itself
        if (!tail) {
            return head;
        }
    }

    // remaining nodes
    let next = tail.next;
    tail.next = null;

    // sort the list part in reverse order
    reverse(head);

    // recur the remaining list part
    head.next = reverseKGroup(next, k);

    // return tail
    return tail;
};

// sorting function
function reverse(curr) {
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}