/**
 * 23. [HARD] Merge k Sorted Lists
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
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var arr = [];
  compose(n, n, '');
  return arr;

  function compose(left, right, str) {
    if (!left && !right && str.length) {
        return arr.push(str);
    }

    if (left) {
        compose(left - 1, right, str + '(');
    }

    if (right > left) {
        compose(left, right - 1, str + ')');
    }
  }
};