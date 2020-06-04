/**
 * 64. Minimum Path Sum [MEDIUM][DP]
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 *
 * Example:
 * Input:
 * [
 *   [1,3,1],
 *   [1,5,1],
 *   [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (!grid[0]) return 0;

    const height = grid.length;
    const width = grid[0].length;
    let tmpGrid = [...Array(height).fill(0)].map(() => Array(width).fill(0));

    tmpGrid[0][0] = grid[0][0];

    for (let i = 1; i < height; i++) {
        tmpGrid[i][0] = tmpGrid[i - 1][0] + grid[i][0];
    }

    for (let i = 1; i < width; i++) {
        tmpGrid[0][i] = tmpGrid[0][i - 1] + grid[0][i];
    }

    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            tmpGrid[i][j] = Math.min(tmpGrid[i - 1][j], tmpGrid[i][j - 1]) + grid[i][j];
        }
    }

    return tmpGrid[height - 1][width - 1];
};