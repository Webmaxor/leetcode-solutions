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
  var merge = function(l1,l2){
      if(l1 === null) return l2;
      if(l2 === null) return l1;

      var head = new ListNode(0);
      var curr = head;
      while(l1 !== null && l2 !== null) {
          if(l1.val <= l2.val){
              curr.next = l1;
              l1 = l1.next;
          }
          else{
              curr.next = l2;
              l2 = l2.next;
          }
          curr = curr.next;
      }

      curr.next = l1 !== null? l1 : l2;
      return head.next;
  };

  if(!lists.length) return null;

  // When the size of lists is 1, that means we've merged all lists into one
  while(lists.length > 1){
      num_lists = lists.length - 1;

      // Should basically pair up lists and merge them without handling
      // any list more than once. At the end of an iteration, there
      // should be half as many lists to handle. Should behave like a recursive solution.
      for(var i = 0; i < num_lists; i+= 2) {
          var l1 = lists.shift();
          var l2 = lists.shift();
          lists.push(merge(l1,l2));
      }
  }

  return lists.shift();
};