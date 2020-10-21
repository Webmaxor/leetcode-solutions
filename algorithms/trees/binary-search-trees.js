// In nodeJS, use util library to show the whole hierarchy of the tree
const { inspect } = require('util')

// Helper class to create tree's node
class Node {
  constructor(value) {
    this.value = value

    // Tree node should have two edges
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    // Implement root
    this.root = null
  }

  // Insert a new value to a tree
  insert(value) {
    // If value is empty, just return the tree
    if (!value) {
      return this
    }

    // Create a new node from the value
    let newNode = new Node(value)

    // If tree is empty, just assign the new node to a root
    if (!this.root) {
      this.root = newNode
      return this
    }

    // Assign the root as a current node
    let node = this.root

    // Start looking for a value in the tree
    while (node !== null) {
      // If value is equal to current node's value, then we found the value in a tree
      // Just return the tree, do nothing more
      if (value === node.value) {
        return this
      }

      // The new value is smaller than current node's value
      if (value < node.value) {
        // If current node doesn't have a left child, assign a new node as a left child
        // of current node. Then exit inserting.
        if (!node.left) {
          node.left = newNode
          return this
        }

        // Continue searching from the left child
        node = node.left
      }
      // The new value is greater than current node's value
      else if (value > node.value) {
        // If current node doesn't have a right child, assign a new node as a right child
        // of current node. Then exit inserting.
        if (!node.right) {
          node.right = newNode
          return this
        }

        // Continue searching from the right child
        node = node.right
      }
    }
  }

  // Find a value in the tree
  find(value) {
    // If tree or value is empty, just return null
    if (!this.root || !value) {
      return null
    }

    // Assign the root as a current node
    let node = this.root

    // Start looking for a value in the tree
    while (node !== null) {
      // The value is smaller than current node's value
      if (value < node.value) {
        // Continue searching from the left child
        node = node.left
      }
      // The value is greater than current node's value
      else if (value > node.value) {
        // Continue searching from the left child
        node = node.right
      }
      // We found the value in a tree. Return the current node
      else {
        return node
      }
    }

    // We haven't found a value in the tree
    return null
  }

  // Delete given value from the tree
  delete(value) {
    // If tree is empty, just return null
    if (!this.root) {
      return null
    }

    // Find and delete node recursively
    this.root = this.deleteNode(this.root, value)
  }

  // Find a node by given value and delete it from the tree (or sub-tree)
  deleteNode(node, value) {
    // Node is empty. Stop recursive function
    if (!node) {
      return null
    }

    // Given value is smaller than current node's value
    if (value < node.value) {
      // Continue from left
      node.left = this.deleteNode(node.left, value)
    }
    // Given value is greater than current node's value
    else if (value > node.value) {
      // Continue from right
      node.right = this.deleteNode(node.right, value)
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

    return node
  }

  // Delete smallest valued node from the tree (or sub-tree)
  deleteMin(node = this.root) {
    if (!node.left) {
      return node.right
    }

    node.left = this.deleteMin(node.left)

    return node
  }

  // Delete greatest valued node from the tree (or sub-tree)
  deleteMax(node = this.root) {
    if (!node.right) {
      return node.left
    }

    node.right = this.deleteMax(node.right)

    return node
  }

  // Find minimum node from the tree (or sub-tree)
  min(node = this.root) {
    // If tree is empty, just return null
    if (!node) {
      return null
    }

    // Start searching the far left node of the tree
    while (node !== null) {
      if (!node.left) {
        return node
      }

      node = node.left
    }
  }

  // Find maximum value from the tree
  max(node = this.root) {
    // If tree is empty, just return null
    if (!node) {
      return null
    }

    // Start searching the far right node of the tree
    while (node !== null) {
      if (!node.right) {
        return node
      }

      node = node.right
    }
  }

  // Find a value that less than given value
  floor(value) {
    // If tree is empty, just return null
    if (!this.root) {
      return null
    }

    // Assign the root as a current node
    let node = this.root

    // Start looking for a value in the tree
    while (node !== null) {
      // The value is smaller than current node's value
      if (value < node.value) {
        // Node's left child is empty. Then just return null
        if (!node.left) {
          return null
        }

        // Continue searching from the left child
        node = node.left
      }
      // The value is larger than current node's value
      else if (value > node.value) {
        // Node's right child is empty or value is smaller than right child's value.
        // Return current node's value
        if (!node.right || value < node.right.value) {
          return node
        }

        // Continue searching from the right child
        node = node.right
      }
      // We found the value in a tree. Return the current value
      else {
        return node
      }
    }

    return null
  }

  // Find a value that greater than given value
  ceiling(value) {
    // If tree is empty, just return null
    if (!this.root) {
      return null
    }

    // Assign the root as a current node
    let node = this.root

    // Start looking for a value in the tree
    while (node !== null) {
      // The value is greater than current node's value
      if (value > node.value) {
        // Node's right child is empty. Then just return null
        if (!node.right) {
          return null
        }

        // Continue searching from the left child
        node = node.right
      }
      // The value is smaller than current node's value
      else if (value < node.value) {
        // Node's left child is empty or value is larger than left child's value.
        // Return current node's value
        if (!node.left || value > node.left.value) {
          return node
        }

        // Continue searching from the left child
        node = node.left
      }
      // We found the value in a tree. Return the current value
      else {
        return node
      }
    }

    return null
  }

  // Get the number of values in the subtree less than given value.
  rank(value) {
    const node = this.find(value)
    return node.left ? this.size(node.left.value) : 0
  }

  // Get the given node's size (all childrens count of the node)
  size(value) {
    let size = 0

    // Find the node of given value
    const node = this.find(value)

    // Traverse all child nodes and count them
    this.traverse(node, () => size++)

    // Return node size
    return size
  }

  // Return the tree
  show() {
    return this
  }

  // Convert tree to a sorted array
  sort() {
    const list = []

    // Traverse the tree
    this.traverse(this.root, (node) => list.push(node.value))

    return list
  }

  // Traverses the tree by ascending order
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

  // Finds all values in the range
  range(low = this.min(), high = this.max()) {
    // Collect all found values into an array
    const values = []

    // Start looking for values from root
    rangeHelper(this.root, low, high)

    // Helper recursive function
    function rangeHelper(node, low, high) {
      if (!node) {
        return
      }

      // If low is less than current node, go left
      if (low < node.value) {
        rangeHelper(node.left, low, high)
      }

      // If current node within the range[lo, hi], add to the queue
      if (low <= node.value && high >= node.value) {
        values.push(node.value)
      }

      // If high is greater than current node, go right
      if (high > node.value) {
        rangeHelper(node.right, low, high)
      }
    }

    // return values
    return values
  }

  rangeCount(low = this.min(), high = this.max()) {
    if (this.find(high)) {
      return this.rank(high) - this.rank(low) + 1
    }
    else {
      return this.rank(high) - this.rank(low)
    }
  }
}

module.exports = BinarySearchTree

/**
 * USAGE
 */
/*
// Create a new empty tree
const tree = new BinarySearchTree()

// Fill the tree
tree.insert(56)
tree.insert(30)
tree.insert(70)
tree.insert(22)
tree.insert(40)
tree.insert(60)
tree.insert(95)
tree.insert(11)
tree.insert(3)
tree.insert(16)
tree.insert(65)
tree.insert(63)
tree.insert(67)

// Search from tree
console.log(inspect(tree.find(22), { showHidden: true, depth: null }))

// Show min value of the tree
console.log(tree.min())

// Show max value of the tree
console.log(tree.max())

// Find equal or less value than the given value
console.log(tree.floor(41))

// Find equal or greater value than the given value
console.log(tree.ceiling(75))

// Get tree as a sorted array
console.log(tree.sort())

// Delete from the tree
tree.delete(22)

// Show the whole tree
console.log(inspect(tree.show(), { showHidden: true, depth: null }))
*/