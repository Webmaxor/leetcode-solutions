/**
 * 19. Remove Nth Node From End of List [MEDIUM]
 * Given a linked list, remove the n-th node from the end of list and return its head.
 *
 * Example:
 * Given linked list: 1->2->3->4->5, and n = 2.
 *
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 * Note: Given n will always be valid.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var left = {next: head}, right = head;

    while (n--) right = right.next;

    while (right) {
      right = right.next;
      left = left.next;
    }

    left.next = left.next.next;

    return head;
};