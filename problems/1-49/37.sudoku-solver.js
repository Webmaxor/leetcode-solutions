/**
 * 37. Sudoku Solver [HARD][DFS][Recursion]
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 *
 * A sudoku solution must satisfy all of the following rules:
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 * Empty cells are indicated by the character '.'.
 *
 * Note:
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 * The given board contain only digits 1-9 and the character '.'.
 * The given board size is always 9x9.
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    dfs(0, 0);

    function dfs(row, col) {
        if (row === 9) return true;
        if (col === 9) return dfs(row + 1, 0);

        if (board[row][col] === '.') {
            for (let num = 1; num <= 9; num++) {
                if (isValid(row, col, `${num}`)) {
                    board[row][col] = `${num}`;

                    if (dfs(row, col + 1)) return true;
                    board[row][col] = '.';
                }
            }
        }
        else {
            return dfs(row, col + 1);
        }

        return false;
    }

    function isValid(row, col, num) {
        for (let rowIdx = 0; rowIdx < 9; rowIdx++) if (board[rowIdx][col] === num) return false;
        for (let colIdx = 0; colIdx < 9; colIdx++) if (board[row][colIdx] === num) return false;

        let squareRowStart = row - (row % 3);
        let squareColStart = col - (col % 3);
        for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
            for (let colIdx = 0; colIdx < 3; colIdx++) {
                if (board[squareRowStart + rowIdx][squareColStart + colIdx] === num) return false;
            }
        }

        return true;
    }
};