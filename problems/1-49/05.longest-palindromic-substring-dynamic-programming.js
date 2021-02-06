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
const longestPalindrome = (s) => {
  const N = s.length

  // Fill NxN table with 0
  const table = new Array(N).fill(null).map(() => new Array(N).fill(0))
  let maxLength = 1
  let start = 0

  // Fill i x i with 1
  for (let i = 0; i < N; i++) {
    table[i][i] = 1;
  }

  for (let i = 0; i < N - 1; i++) {
    if (s[i] == s[i + 1]) {
      table[i][i + 1] = 1;
      start = i;
      maxLength = 2;
    }
  }

  for (let k = 3; k <= N; k++) {
    // Fix the starting index
    for (let i = 0; i < N - k + 1; i++) {
      let j = i + k - 1;

      if (table[i + 1][j - 1] && s[i] == s[j]) {
        table[i][j] = 1;

        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }

  return s.substring(start, start + maxLength);
};

/**
 * USAGE
 */
console.log(longestPalindrome('babad'))