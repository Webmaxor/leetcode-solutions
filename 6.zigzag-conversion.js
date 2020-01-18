/**
 * 6. ZigZag Conversion [MEDIUM][O(n)]
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string s, int numRows);
 *
 * Example 1:
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 * Example 2:
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 *
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const strArray = s.split('');
  const strLength = strArray.length;

  if (strLength === 1 || numRows === 1) {
      return s;
  }

  let strNew = [];

  for (let i = 0; i < strLength; i++) {
      const pos = i % (2*numRows - 2);
      const j = pos < numRows ? pos : 2*numRows - 2 - pos;
      strNew[j] = strNew[j] ? strNew[j] + strArray[i] : strArray[i];
  }

  return strNew.join('');
};