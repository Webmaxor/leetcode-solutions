// Use AVL-Tree or Red-Black Tree to get balanced binary search tree
const AVLTree = require('../trees/avl-trees')

/**
 * Find intersections by sweep line algorithm
 * @param {Array} lines
 * @returns {Number} intersections
 */
function lineSegmentIntersection(lines = []) {
  if (!lines.length) {
    return 0
  }

  // Collect x points and related y points
  const xPoints = []
  lines.map(line => {
    // Line is horizontal
    if (line[0][1] === line[1][1]) {
      xPoints.push(
        {
          value: line[0][0],
          left: true,
          yPoint: line[0][1]
        },
        {
          value: line[1][0],
          left: false,
          yPoint: line[0][1]
        }
      )
    }
    // Line is vertical
    else {
      xPoints.push({
        value: line[0][0],
        left: true,
        yPoints: [line[0][1], line[1][1]]
      })
    }
  })

  // Sort x points
  xPoints.sort((a,b) => a.value - b.value)

  // Count intersections
  let intersections = 0

  // Implement a tree
  const tree = new AVLTree()

  // Run through x points
  xPoints.map(point => {
    // If x point is left endpoint of horizontal line, add y point to a tree
    if (point.left && typeof point.yPoint !== "undefined") {
      tree.insert(point.yPoint)
    }

    // If x point is right endpoint of horizontal line, delete y point from the tree
    if (!point.left) {
      tree.delete(point.yPoint)
    }

    // If x point is related to a vertical line, perform a range search in the tree
    if (typeof point.yPoints !== "undefined") {
      intersections += tree.rangeCount(point.yPoints[0], point.yPoints[1])
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
  [ [4,4], [6,4] ],
  [ [1,2], [5,2] ],
  [ [8,0], [8,3] ],
  [ [5,3], [5,6] ],
];

console.log(lineSegmentIntersection(lines));