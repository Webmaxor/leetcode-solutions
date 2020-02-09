/**
 * 73. Set Matrix Zeroes [MEDIUM][Matrix]
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
 *
 * Example 1:
 * Input:
 * [
 *   [1,1,1],
 *   [1,0,1],
 *   [1,1,1]
 * ]
 * Output:
 * [
 *   [1,0,1],
 *   [0,0,0],
 *   [1,0,1]
 * ]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let h = matrix.length;
    let w = matrix[0].length;

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (matrix[i][j] === 0 && Object.is(matrix[i][j], 0)) {
                for (let y = 0; y < h; y++) {
                    matrix[y][j] = matrix[y][j] && -0;
                }

                for (let x = 0; x < w; x++) {
                    matrix[i][x] = matrix[i][x] && -0;
                }
            }
        }
    }
};