/**
 * 587. Erect the Fence [HARD][Convex hull][Monotone chain]
 * There are some trees, where each tree is represented by (x,y) coordinate in a two-dimensional garden. Your job is to fence the entire garden using the minimum length of rope as it is expensive. The garden is well fenced only if all the trees are enclosed. Your task is to help find the coordinates of trees which are exactly located on the fence perimeter.
 *
 * Example
 * Input: [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
 * Output: [[1,1],[2,0],[4,2],[3,3],[2,4]]
 */

/**
 * @param {number[][]} points
 * @return {number[][]}
 */
var outerTrees = function(points) {
  if (!points.length) return []

  let stack = [];

  // Orientation is a key point
  function orientation(p, q, r) {
    return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1])
  }

  // Sort points by ascending order
  for (let i = 1; i < points.length; i++) {
    for (let j = i; j > 0; j--) {
      if (points[j][0] > points[j - 1][0] || points[j][0] === points[j - 1][0] && points[j][1] > points[j - 1][1]) {
        [points[j], points[j - 1]] = [points[j - 1], points[j]]
      }
      else {
        break;
      }
    }
  }

  // Lower hull
  for (let i = 0; i < points.length; i++) {
    while (stack.length >= 2 && orientation(stack[stack.length - 2], stack[stack.length - 1], points[i]) > 0) {
      stack.pop();
    }
    stack.push(points[i])
  }

  stack.pop();

  // Upper hull
  for (let i = points.length - 1; i >= 0; i--) {
    while (stack.length >= 2 && orientation(stack[stack.length - 2], stack[stack.length - 1], points[i]) > 0) {
      stack.pop();
    }
    stack.push(points[i])
  }

  // Remove duplicated elements
  return [...new Set(stack)]
};

/** Usage */
//console.log(outerTrees([[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]))