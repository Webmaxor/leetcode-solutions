/**
 * 51. N-Queens
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
 * Given an integer n, return the number of distinct solutions to the n-queens puzzle.
 *
 * Example:
 * Input: 4
 * Output: 2
 * Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
 * [
 *  [".Q..",  // Solution 1
 *   "...Q",
 *   "Q...",
 *   "..Q."],
 *
 * [
 *  "..Q.",  // Solution 2
 *  "Q...",
 *  "...Q",
 *  ".Q.."]
 * ]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
 */

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const res = [];
    backtrack(res, n);
    return res.length;
};

function backtrack(res, n, board = [], r = 0) {
    if (r === n) {
        res.push(1);
        return;
    }

    for (let c = 0; c < n; c++) {
        if (!board.some((bc, br) => bc === c || bc === c + r - br || bc === c - r + br)) {
            board.push(c);
            backtrack(res, n, board, r + 1);
            board.pop();
        }
    }
}