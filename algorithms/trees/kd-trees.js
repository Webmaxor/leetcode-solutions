// In nodeJS, use util library to show the whole hierarchy of the tree
const { inspect } = require('util')

// Helper class to create tree's node
class KDNode {
  constructor(value) {
    this.value = value

    // Tree node should have two edges
    this.left = null
    this.right = null
  }
}

class KDTree {
  constructor() {
    // Implement root
    this.root = null
  }

  build(points, depth) {
    // Start looking for from the root
    this.root = this._build(points, depth)
  }

  _build(points, depth) {
    if (!points || points.length == 0) {
      return null
    }

    // Calculate axis
    const axis = depth % points[0].length

    // Sort the points array
    points.sort((a, b) => a[axis] - b[axis])

    // Calculate median
    const median = Math.floor(points.length / 2)

    // Create a new node from the value
    const newNode = new KDNode(points[median])
    newNode.left = this._build(points.slice(0, median), depth + 1)
    newNode.right = this._build(points.slice(median + 1), depth + 1)

    return newNode
  }

  searchNearestPath(point) {
    if (!point) {
      return null
    }

    let minLength = null
    let nearestNode = null

    // Traverse the tree
    this.traverse(this.root, (node) => {
      const xLine = Math.abs(node.value[0] - point[0])
      const yLine = Math.abs(node.value[1] - point[1])

      // Pythagorean theorem
      const path = Math.round((
        Math.sqrt(xLine*xLine + yLine*yLine) + Number.EPSILON
      ) * 100) / 100

      if (minLength === null || path < minLength) {
        minLength = path
        nearestNode = node
      }
    })

    return {
      nearestNode,
      length: minLength
    }
  }

  // Find points in the given rectangle
  rectangeSearch(topLeft, bottomRight) {
    const foundPoints = [];

    _rectangeSearch(this.root, 0)

    function _rectangeSearch(node, depth) {
      if (node == null) {
        return
      }

      // Node is in the rectangle
      if (
        topLeft[0] <= node.value[0] && bottomRight[0] >= node.value[0] &&
        topLeft[1] >= node.value[1] && bottomRight[1] <= node.value[1]
      ) {
        foundPoints.push(node)
      }

      // Calculate axis
      const axis = depth % node.value.length

      const edge1 = axis === 0 ? topLeft : bottomRight
      const edge2 = axis === 0 ? bottomRight : topLeft

      if (edge1[axis] < node.value[axis]) {
        if (edge2[axis] <= node.value[axis]) {
          _rectangeSearch(node.left, depth + 1)
        }
        else {
          _rectangeSearch(node.left, depth + 1)
          _rectangeSearch(node.right, depth + 1)
        }
      }
      else {
        _rectangeSearch(node.right, depth + 1)
      }
    }

    return foundPoints;
  }

  // Traverses the tree
  traverse(node, callback) {
    if (node === null) {
      return
    }

    // Traverse the left child
    this.traverse(node.left, callback)

    // Run callback function
    callback(node)

    // Traverse the right child
    this.traverse(node.right, callback)
  }

  // Return the tree
  show() {
    return this
  }
}

module.exports = KDTree

/**
 * USAGE
 */

// Create a new empty tree
// const tree = new KDTree()

// Points [x, y]
// const points = [ [2,3], [5,4], [4,7], [8,1], [7,2], [9,6] ]

// Fill the tree
// tree.build(points, 0)

// Show the whole tree
// console.log(inspect(tree.show(), { showHidden: true, depth: null }))

// Search nearest path
// console.log(tree.searchNearestPath([4,3]))

// Rectange search
// console.log(tree.rectangeSearch([3,6], [9,1]))