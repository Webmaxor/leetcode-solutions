/**
 * 23. Merge k Sorted Lists [HARD]
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 *
 * Example:
 * Input:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let head = new ListNode(-1);
  let crt = head;

  if (!lists.length) {
      return head.next;
  }

  let listValues = [];

  for (let i = 0; i < lists.length; i++) {
      let list = lists[i];
      while (list) {
          listValues.push(list.val);
          list = list.next;
      }
  }

  listValues = listValues.sort((a,b) => (a - b));

  for (let i = 0; i < listValues.length; i++) {
      crt.next = new ListNode(listValues[i]);
      crt = crt.next;
  }

  return head.next;
};