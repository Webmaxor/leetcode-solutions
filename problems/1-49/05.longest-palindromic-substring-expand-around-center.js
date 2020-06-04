/**
 * 5. Longest Palindromic substring [MEDIUM][Expand around center]
 *
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * Example 1:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 */

/**
 * @param {string} s
 * @return {string}
 */
// T O(N^2)
// S O(1)
var longestPalindrome = function(s) {
    var max = '';
    for (var i = 0; i < s.length; i++) {
      // this loop is to take into account
      // different palindromes like 'aba' and 'abba'
      for (var j = 0; j < 2; j++) {
        var left = i;
        var right = i + j;
        while (s[left] && s[left] === s[right]) {
          left--;
          right++;
        }
        // here imagine we get into string like
        // "sabbad", then
        // right = 5
        // left = 0
        // and actual length of "abba" should be "4"
        // 5 - 0 - 1 === 4
        if ((right - left - 1) > max.length) {
          max = s.substring(left + 1, right);
        }

      }
    }
    return max;
  };