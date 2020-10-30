/**
 * Find intersections by brute force algorithm. Worst case - O(N^2)
 * @param {Array} lines
 * @returns {Number} intersections
 */
function sweepLine(lines = []) {
  if (!lines.length) {
    return 0
  }

  // Sort line coordinates from left to right
  lines = lines.map(line => line.sort((a,b) => a[0] - b[0]))
  lines.sort((a,b) => a[0][0] - b[0][0])

  // Collect horizontal line's y coordination and ending x coordination
  const y2x = {}

  // Count intersections
  let intersections = 0

  // Collect starting and ending points of lines
  lines.map(line => {
    // Horizontal line
    if (line[0][1] === line[1][1]) {
      y2x[line[0][1]] = line[1][0];
    }

    // Vertical line
    if (line[0][0] === line[1][0]) {
      // Search in y2x
      if (Object.keys(y2x).some(y => (
        // Check if vertical line's x coordination is not large than y coordinate's x position
        // This is needed to clarify if horizontal line is not ended
        line[0][0] < y2x[y] &&
        (
          // Check if y in vertical line's start and end points
          line[0][1] < y && line[1][1] > y ||
          // Line might be bottom to up (reverse)
          line[0][1] > y && line[1][1] < y
        )
      ))) {
        // Increment intersections
        intersections++
      }
    }
  })

  return intersections
}

/**
 * USAGE
 */
const lines = [
  [ [2,4], [2,8] ],
  [ [9,3], [9,6] ],
  [ [3,1], [9,1] ],
  [ [6,4], [4,4] ],
  [ [1,2], [5,2] ],
  [ [8,0], [8,3] ],
  [ [5,3], [5,6] ],
];

console.log(sweepLine(lines));