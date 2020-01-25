/**
 * 43. Multiply Strings [MEDIUM][O(n^2 + n)]
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 *
 * Example 1:
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 *
 * Example 2:
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *
 * Note:
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 * You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }

    let m = num1.length,
        n = num2.length;

    let multiply = Array(m + n - 1).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            multiply[i + j] += num1[m - 1 - i] * num2[n - 1 - j];
        }
    }

    for (let i = 0; i < multiply.length - 1; i++) {
        multiply[i + 1] += Math.floor(multiply[i] / 10);
        multiply[i] %= 10;
    }

    return multiply.reverse().join('');
};