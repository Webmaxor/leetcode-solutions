/**
 * 10. Regular expression matching [HARD]
 *
 * Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 *
 * Note:
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters like . or *.
 *
 * Example 1:
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 *
 * Example 2:
 * Input:
 * s = "aa"
 * p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
 *
 * Example 3:
 * Input:
 * s = "ab"
 * p = ".*"
 * Output: true
 * Explanation: ".*" means "zero or more (*) of any character (.)".
 *
 * Example 4:
 * Input:
 * s = "aab"
 * p = "c*a*b"
 * Output: true
 * Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
 *
 * Example 5:
 * Input:
 * s = "mississippi"
 * p = "mis*is*p*."
 * Output: false
*/

function isMatch(s, p) {
  const H = s.length;
  const W = p.length;

  const dp = [...Array(H+1)].map(r => Array(W+1).fill(false));

  for (let r = 0; r <= H; r++) {
    for (let c = 0; c <= W; c++) {

      if (r === 0 && c === 0) {
        dp[r][c] = true;
      } else if (r === 0) {
        dp[r][c] = p[c-1] === '*' && dp[r][c-2];
      } else {
        if (s[r-1] === p[c-1] || p[c-1] === '.') {
          dp[r][c] = dp[r-1][c-1];
        } else if (p[c-1] === '*') {
          if (s[r-1] === p[c-2] || p[c-2] === '.') {
            dp[r][c] = dp[r-1][c-2] || dp[r-1][c] || dp[r][c-2];
          } else {
            dp[r][c] = dp[r][c-2];
          }
        }
      }
    }
  }

  return dp[H][W];
}