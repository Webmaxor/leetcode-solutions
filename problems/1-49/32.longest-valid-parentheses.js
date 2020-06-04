/**
 * 32. Longest valid parentheses [HARD]
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 *
 * Example 1:
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 *
 * Example 2:
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if (!s || !s.length) { return 0; }

  /* We will store the position of every invalid parenthesis.
     Once we have that, the solution is simply the longest
     subarray between two invalid parentheses */
  const invalids = new Set();

  /* We stack the opening parentheses as we find them,
     and pop them we we meet the corresponding closing
     parenthesis. Note that a closing ) always matches the
     latest opening ( one, hence the choice of a stack */
  const stack = [];

  for (let i=0; i<s.length; i++) {
      if (s[i] === '(') {
          stack.push(i);
      } else {
          // If we are closing an opening parenthesis, pop it out
          if (stack.length) {
              stack.pop();
          } else {
              /* Otherwise there is nothing to close,
                 hence this parenthesis is invalid */
              invalids.add(i);
          }
      }
  }

  /* Any remaining opening parenthesis that has not been closed is
     automatically invalid */
  while (stack.length) {
      invalids.add(stack.pop());
  }

  // Here we just count how many valid in between every invalid
  let max = 0, count = 0;
  for (let i=0; i<=s.length; i++) {
      if (i < s.length && !invalids.has(i)) {
          count++;
      } else {
          max = Math.max(max, count);
          count = 0;
      }
  }
  return max;
};