/**
 * 3. Longest Substring Without Repeating Characters [MEDIUM][BruteForce][O(n)]
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let tmp;
  let substrings = [];
  let longest = 0;

  let strArray = s.split('');
  for (i = 0; i < strArray.length; i++) {
      tmp = [];
      strArray.map((item, index) => {
          if (tmp.includes(item)) {
              substrings.push(tmp.join(''));
              tmp = [];
          }

          tmp.push(item);
      });
      substrings.push(tmp.join(''));

      delete strArray[i];
  }

  // Delete duplicates
  substrings = [...new Set(substrings)];

  if (substrings.length) {
      longest = substrings.sort((a, b) => { return b.length - a.length; })[0].length;

  }

  return longest;
};