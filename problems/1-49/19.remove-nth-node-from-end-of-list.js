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
    if (n === 0) {
        return head;
    }

    let count = 0, counter = 0;

    // find list nodes count
    let node = head;
    while (node) {
        count++;
        node = node.next;
    }

    if (n > count) {
        return head;
    }

    const deleteIndex = count - n - 1;


    if (deleteIndex === -1) {
        head = head.next;
        return head;
    }

    node = head;
    while (node) {
        if (counter === deleteIndex) {
            node.next = node.next.next;
            return head;
        }
        counter++;
        node = node.next;
    }

    return head;
};