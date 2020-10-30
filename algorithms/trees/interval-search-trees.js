// In nodeJS, use util library to show the whole hierarchy of the tree
const { inspect } = require('util')
const BinarySearchTree = require('./binary-search-trees')

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

class IntervalSearchTree extends BinarySearchTree {
  constructor() {
    super()

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
  find(low, high, all = false) {
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

    const results = []

    // Start looking for intersection in the tree
    while (node !== null) {
      // Check if intervals intersect
      const w1 = node.high - node.low
      const w2 = high - low
      const min = Math.min(low, node.low)
      const max = Math.max(high, node.high)

      if ((w1 + w2) > (max - min)) {
        if (all) {
          results.push(node)
        }
        else {
          return node
        }
      }

      // If left is empty, continue checking the right
      if (!node.left && node.right || node.left && node.left.max <= low) {
        node = node.right
      }
      else {
        node = node.left
      }
    }

    if (all && results.length) {
      return results
    }

    // We haven't found an intersected node in the tree
    return null
  }

  findAll(low, high) {
    const found = this.find(low, high, true)
    return found !== null ? found : []
  }

  // Delete given key (low) from the tree
  delete(low, high) {
    // If tree is empty, just return null
    if (!this.root) {
      return null
    }

    // Find and delete node recursively
    this.root = this.deleteNode(this.root, low)

    // Update max values
    this.updateMax()
  }

  // Find a node by given key and delete it from the tree (or sub-tree)
  deleteNode(node, key) {
    // Node is empty. Stop recursive function
    if (!node) {
      return null
    }

    // The key is smaller than current node's low
    if (key < node.low) {
      // Continue searching from the left child
      node.left = this.deleteNode(node.left, key)
    }
    // The key is greater than current node's high
    else if (key > node.low) {
      // Continue searching from the right child
      node.right = this.deleteNode(node.right, key)
    }
    // We found the node
    else {
      // Node doesn't have a right child
      if (!node.right) {
        return node.left
      }

      // Node doesn't have a left child
      if (!node.left) {
        return node.right
      }

      // Assign current node to a temporary variable
      const currentNode = node

      // Set current node to the minimum node of its child
      node = this.min(currentNode.right)

      // Delete minimum node from the tree
      node.right = this.deleteMin(currentNode.right)

      // Set current node's left child to an updated node (now minimum node)
      node.left = currentNode.left
    }

    // Reset max value. Later we traverse the tree to update max values
    node.max = 0

    return node
  }

  updateMax() {
    let max = 0
    // Traverse the tree
    this.traverse(this.root, (node) => {
      if (node.max > max) {
        max = node.max
      }
      else {
        node.max = max
      }
    })
  }

  // Traverses the tree
  traverse(node, callback) {
    if (node === null) {
      return
    }

    // Traverse the left child
    this.traverse(node.left, callback)

    // Traverse the right child
    this.traverse(node.right, callback)

    // Run callback function
    callback(node)
  }
}

module.exports = IntervalSearchTree

/**
 * USAGE
 */

// Create a new empty tree
// const tree = new IntervalSearchTree()

// tree.insert(17,19)
// tree.insert(5,8)
// tree.insert(4,8)
// tree.insert(15,18)
// tree.insert(7,10)
// tree.insert(21,24)

// Show the whole tree
// console.log(tree.show())

// Delete interval
// tree.delete(5,8)

// Show the whole tree
// console.log(tree.show())

// Search in the tree
// console.log(tree.findAll(22, 23))

// Find all intervals in the tree
// console.log(tree.findAll(0, 12))
