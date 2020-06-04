/**
 * 5. Longest Palindromic substring [MEDIUM][Dynamic programming]
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
var longestPalindrome = function(s) {
  const strLength = s.length;

  if (!strLength) return "";

  let table = [];
  let maxLength = 1;
  let start = 0;
  const strArray = s.split('');

  for (let i = 0; i < strLength; i++) {
      table[i] = [];
      table[i][i] = 1;
  }

  for (let i = 0; i < strLength - 1; i++) {
      if (strArray[i] == strArray[i+1]) {
          table[i][i+1] = 1;
          start = i;
          maxLength = 2;
      }
  }

  for (let k = 3; k <= strLength; k++) {
      // Fix the starting index
      for (let i = 0; i < strLength - k + 1; i++) {
          let j = i + k - 1;

          if (table[i+1][j-1] && strArray[i] == strArray[j]) {
              table[i][j] = 1;

              if (k > maxLength) {
                  start = i;
                  maxLength = k;
              }
          }
      }
  }

  let output = '';
  for(let i = start; i <= (start + maxLength - 1); i++) {
      output += strArray[i];
  }

  return output;
};