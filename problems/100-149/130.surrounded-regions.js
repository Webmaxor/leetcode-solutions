/**
 * 130. Surrounded Regions [MEDIUM][Recursion]
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 *
 * Example
 * Input:
 * [
 *  [X X X X],
 *  [X O O X],
 *  [X X O X],
 *  [X O X X]
 * ]
 *
 * Output:
 * [
 *  [X X X X],
 *  [X X X X],
 *  [X X X X],
 *  [X O X X]
 * ]
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  // Temporary mark border O's as *
  const mark = (i, j) => {
    if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) return
    if (board[i][j] !== "O") return

    board[i][j] = "*"

    // Check around
    mark(i - 1, j)
    mark(i + 1, j)
    mark(i, j - 1)
    mark(i, j + 1)
  }

  // Check for left and right sides
  for (let i = 0; i < board.length; i++) {
    mark(i, 0)
    mark(i, board[0].length - 1)
  }

  // Check for top and bottom
  for (let i = 0; i < board[0].length; i++) {
    mark(0, i)
    mark(board.length - 1, i)
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "O") {
        board[i][j] = "X"
      }
      else if (board[i][j] == "*") {
        board[i][j] = "O"
      }
    }
  }

  return board
}