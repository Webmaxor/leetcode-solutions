/**
 * 22. Generate parentheses [MEDIUM]
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * For example, given n = 3, a solution set is:
 * [
 *   "((()))",
 *   "(()())",
 *   "(())()",
 *   "()(())",
 *   "()()()"
 * ]
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