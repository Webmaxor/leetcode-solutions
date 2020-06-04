/**
 * 59. Spiral Matrix II [MEDIUM]
 * Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
 *
 * Example:
 * Input: 3
 * Output:
 * [
 *  [ 1, 2, 3 ],
 *  [ 8, 9, 4 ],
 *  [ 7, 6, 5 ]
 * ]
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n < 1) return [];
    if (n === 1) return [[1]];

    let matrix = [...Array(n)].map(() => Array(n).fill(0));

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const range = [n, n - 1];
    let d = 0, r = 0, c = -1, k = 0;

    while (range[d % 2] > 0) {
        for (let i = 0; i < range[d % 2]; i++) {
            r += directions[d][0];
            c += directions[d][1];
            matrix[r][c] = ++k;
        }

        range[d % 2]--;
        d = (d + 1) % 4;
    }

    return matrix;
};