// Use Interval search tree
const IntervalSearchTree = require('../trees/interval-search-trees')

/**
 * Find rectangle intersections by sweep line algorithm
 * @param {Array} lines
 * @returns {Number} intersections
 */
function rectangleIntersectionSearch(rectangles = []) {
  if (!rectangles.length) {
    return 0
  }

  // Collect x points and related y points
  const xPoints = []
  rectangles.map(rectangle => {
    const isVertical = rectangle[1][0] - rectangle[0][0] <= rectangle[0][1] - rectangle[1][1]

    xPoints.push(
      {
        value: rectangle[0][0],
        left: true,
        yPoints: [rectangle[1][1], rectangle[0][1]],
        isVertical
      },
      {
        value: rectangle[1][0],
        left: false,
        yPoints: [rectangle[1][1], rectangle[0][1]],
        isVertical
      }
    )
  })

  // Sort x points
  xPoints.sort((a,b) => a.value - b.value)

  // Count intersections
  let intersections = 0

  // Implement a tree
  const tree = new IntervalSearchTree()

  // Run through x points
  xPoints.map(point => {
    if (!point.isVertical) {
      // If x point is left endpoint of horizontal rectangle, add y point to a tree
      if (point.left) {
        tree.insert(...point.yPoints)
      }
      // If x point is right endpoint of horizontal rectangle, delete y point from the tree
      else {
        tree.delete(...point.yPoints)
      }
    }
    // If x point is related to a vertical rectangle, perform a interval search in the tree
    else if (point.left) {
      intersections += tree.findAll(...point.yPoints).length
    }
  })

  return intersections
}

/**
 * USAGE
 */
const rectangles = [
  [ [2,6],  [5,1]  ],
  [ [1,5],  [8,2]  ],
  [ [4,10], [13,7] ],
  [ [6,12], [7,0]  ],
  [ [9,6],  [17,3] ],
  [ [10,5], [14,1] ],
  [ [10,12],[16,8] ],
  [ [19,9], [22,5] ],
  [ [17,11],[18,7] ],
  [ [15,2], [24,0] ],
  [ [18,6], [23,3] ],
];

console.log(rectangleIntersectionSearch(rectangles));