/**
 * 14. Longest Common Prefix [EASY]
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Note:
 * All given inputs are in lowercase letters a-z.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = "";

  if (!strs.length) {
      return prefix;
  }

  for (let i = 0; i < strs.length; i++) {
      strs[i] = strs[i].split('');
  }

  for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
          if (strs[0][i] !== strs[j][i]) {
              return prefix;
          }
      }

      prefix = prefix + strs[0][i];
  }

  return prefix;
};