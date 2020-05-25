/**
 * 200.  Number of Islands [MEDIUM][Union-find]
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * Example
 * Input:
 * [
 *  [1 1 1 1 0],
 *  [1 1 0 1 0],
 *  [1 1 0 0 0],
 *  [0 0 0 0 0]
 * ]
 *
 * Output: 1
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */

const UnionFind = require('./algorithms/union-find/union-find-eager')

var numIslands = function(grid) {
  if (!grid.length || !grid[0].length) return 0;

  const rowCount = grid.length
  const colCount = grid[0].length

  const uf = new UnionFind()

  uf.assign(rowCount * colCount)

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (row < rowCount - 1 && grid[row][col] == grid[row + 1][col]) {
        uf.union(colCount * row + col, colCount * (row + 1) + col)
      }
      if (col < colCount - 1 && grid[row][col] == grid[row][col + 1]) {
        uf.union(colCount * row + col, colCount * row + col + 1)
      }
    }
  }

  let nodes = uf.show()
  let isl = [];

  for (let i = 0; i < nodes.length; i++) {
    const curRow = Math.floor(nodes[i] / colCount);
    const curCol = nodes[i] % colCount;

    if (!isl.includes(nodes[i]) && grid[curRow][curCol] !== '0') {
      isl.push(nodes[i]);
    }
  }

  return isl.length;
};

/**
 * Usage
 */
// const islandsCount = numIslands([
//   ["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","1"]
//   // ["1","0","1","1","1"],["1","0","1","0","1"],["1","1","1","0","1"]
// ])

// console.log(islandsCount)