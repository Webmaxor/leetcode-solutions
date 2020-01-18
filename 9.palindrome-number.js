/**
 * 9. Palindrome Number [EASY]
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 *
 * Example 1:
 * Input: 121
 * Output: true
 *
 * Example 2:
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 * Follow up:
 * Could you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || x % 10 === 0) return false;
  if (x < 10) return true;

  let reverted = 0;
  while (reverted < x) {
      reverted = reverted*10 + x%10;
      x = Math.trunc(x/10);
  }

  // check is for even and odd type numbers
  return reverted === x || Math.trunc(reverted/10) === x;
};
