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

  }

  // Find minimum value from the tree
  min() {
    // If tree is empty, just return null
    if (!this.root) {
      return null
    }

    // Assign the root as a current node
    let node = this.root

    // Start searching the far left node of the tree
    while (node !== null) {
      if (!node.left) {
        return node.value
      }

      node = node.left
    }
  }

  // Find maximum value from the tree
  max() {
    // If tree is empty, just return null
    if (!this.root) {
      return null
    }

    // Assign the root as a current node
    let node = this.root

    // Start searching the far left node of the tree
    while (node !== null) {
      if (!node.right) {
        return node.value
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
          return node.value
        }

        // Continue searching from the right child
        node = node.right
      }
      // We found the value in a tree. Return the current value
      else {
        return node.value
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
        // Node's left child is empty. Then just return null
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
          return node.value
        }

        // Continue searching from the left child
        node = node.left
      }
      // We found the value in a tree. Return the current value
      else {
        return node.value
      }
    }

    return null
  }

  // Return the tree
  show() {
    return this
  }

  // Convert tree to a sorted array
  sort() {
    const list = []
    traverse(this.root, list)

    // Recursive helper function to traverse the tree
    function traverse(node = this.root) {
      if (node === null) {
        return
      }

      // Traverse the left child
      traverse(node.left)

      // Add current node's value to a list
      list.push(node.value)

      // Traverse the right child
      traverse(node.right)
    }

    return list
  }
}

module.exports = BinarySearchTree

/**
 * USAGE
 *

// Create a new empty tree
const searchTree = new BinarySearchTree()

// Fill the tree
searchTree.insert(56)
searchTree.insert(30)
searchTree.insert(70)
searchTree.insert(22)
searchTree.insert(40)
searchTree.insert(60)
searchTree.insert(95)
searchTree.insert(11)
searchTree.insert(3)
searchTree.insert(16)
searchTree.insert(65)
searchTree.insert(63)
searchTree.insert(67)

// Show the whole tree
console.log(inspect(searchTree.show(), { showHidden: true, depth: null }))

// Search from tree
console.log(inspect(searchTree.find(22), { showHidden: true, depth: null }))

// Show min value of the tree
console.log(searchTree.min())

// Show max value of the tree
console.log(searchTree.max())

// Find equal or less value than the given value
console.log(searchTree.floor(41))

// Find equal or greater value than the given value
console.log(searchTree.ceiling(75))

// Get tree as a sorted array
console.log(searchTree.sort())
*/