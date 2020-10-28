// In nodeJS, use util library to show the whole hierarchy of the tree
const { inspect } = require('util')

// Helper class to create tree's node
class IntervalNode {
  constructor(low, high) {
    this.low = low
    this.high = high
    this.max = high

    // Tree node should have two edges
    this.left = null
    this.right = null
  }
}

class IntervalSearchTree {
  constructor() {
    // Implement root
    this.root = null
  }

  // Insert a new interval to a tree
  insert(low, high) {
    // Start looking for from the root
    this.root = this.insertNode(this.root, low, high)
  }

  // Recursive function to search for position to insert a new node
  insertNode(node, low, high) {
    // Optional, swap the low and high values if low is larger than high
    if (low > high) {
      [low, high] = [high, low]
    }

    // Insert at bottom
    if (node == null) {
      return new IntervalNode(low, high)
    }

    // The new low is smaller than current node's low
    if (low < node.low) {
      // Continue searching from the left child
      node.left = this.insertNode(node.left, low, high)
    }
    // The new low is greater than current node's high
    else if (low > node.low) {
      // Continue searching from the right child
      node.right = this.insertNode(node.right, low, high)
    }

    if (node.max < high) {
      node.max = high
    }

    return node
  }

  // Find an interval in the tree
  find(low, high) {
    // If tree is empty, just return null
    if (!this.root) {
      return null
    }

    // Optional, swap the low and high values if low is larger than high
    if (low > high) {
      [low, high] = [high, low]
    }

    // Assign the root as a current node
    let node = this.root

    // Start looking for intersection in the tree
    while (node !== null) {
      // Check if intervals intersect
      const w1 = Math.abs(node.low - node.high)
      const w2 = Math.abs(low - high)
      const min = low < node.low ? low : node.low
      const max = high > node.high ? high : node.high

      if (w1 + w2 > Math.abs(min - max)) {
        return node
      }

      // If left is empty, continue checking the right
      if (!node.left && node.right || node.left && node.left.max <= low) {
        node = node.right
      }
      else {
        node = node.left
      }
    }

    // We haven't found an intersected node in the tree
    return null
  }

  // Return the tree
  show() {
    return this
  }
}

module.exports = IntervalSearchTree

/**
 * USAGE
 */

// Create a new empty tree
const tree = new IntervalSearchTree()

tree.insert(17,19)
tree.insert(5,8)
tree.insert(4,8)
tree.insert(15,18)
tree.insert(7,10)
tree.insert(21,24)

// Show the whole tree
// console.log(inspect(tree.show(), { showHidden: true, depth: null }))

// Search in the tree
console.log(tree.find(11, 8))
