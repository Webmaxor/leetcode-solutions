// In nodeJS, use util library to show the whole hierarchy of the tree
const { inspect } = require('util')
const BinarySearchTree = require('./binary-search-trees')

// Helper class to create tree's node
class Node {
  constructor(value) {
    this.value = value

    // Tree node should have two edges
    this.left = null
    this.right = null
  }
}

class AVLTree extends BinarySearchTree {
  rotateLeft(node) {
    // Create a new node based on parent's right node
    const newNode = node.right

    // Assign right child's left child to parent's right child
    node.right = newNode.left

    // Set current parent to right child's left child (rotate left)
    newNode.left = node

    return newNode
  }

  rotateRight(node) {
    // Create a new node based on parent's left node
    const newNode = node.left

    // Assign left child's right child to parent's left child
    node.left = newNode.right

    // Set current parent to left child's right child (rotate right)
    newNode.right = node

    return newNode
  }

  rotateLeftRight(node) {
    // Rotate node's left child to left
    node.left = this.rotateLeft(node.left)

    // then rotate node to right
    return this.rotateRight(node)
  }

  rotateRightLeft(node) {
    // Rotate node's right child to right
    node.right = this.rotateRight(node.right)

    // then rotate node to left
    return this.rotateLeft(node)
  }

  // Get tree (sub-tree) height
  getHeight(node) {
    let height = 0

    if (!node) {
      height = -1
    } else {
      height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
    }

    return height
  }

  // Get tree (sub-tree) balance. Tree is balanced if −1 ≤ balance ≤ 1
  getBalance(node) {
    return this.getHeight(node.right) - this.getHeight(node.left)
  }

  // Insert a new value to a tree
  insert(value) {
    // If value is empty, just return the tree
    if (!value) {
      return
    }

    // Start looking for from the root
    this.root = this.insertNode(this.root, value)

    return this.root
  }

  // Recursive function to search for position to insert a new node
  insertNode(node, value) {
    // Insert at bottom
    if (node == null) {
      return new Node(value)
    }

    // The new value is smaller than current node's value
    if (value < node.value) {
      // Continue searching from the left child
      node.left = this.insertNode(node.left, value)
    }
    // The new value is greater than current node's value
    else if (value > node.value) {
      // Continue searching from the right child
      node.right = this.insertNode(node.right, value)
    }

    return this.fixBalance(node, value)
  }

  fixBalance(node, value) {
    // If the balance is not OK, then try to balance the node.
    if (node.left && this.getBalance(node) < -1) {
      if (value < node.left.value) {
         node = this.rotateRight(node)
      } else {
         node = this.rotateLeftRight(node)
      }
    }
    else if (node.right && this.getBalance(node) > 1) {
      if (value > node.right.value) {
         node = this.rotateLeft(node)
      } else {
         node = this.rotateRightLeft(node)
      }
    }

    return node
  }
}

module.exports = AVLTree

/**
 * USAGE
 */

// Create a new empty tree
const tree = new AVLTree()

// Fill the tree
inspect(tree.insert(26))
inspect(tree.insert(41))
inspect(tree.insert(29))
inspect(tree.insert(11))
inspect(tree.insert(65))
inspect(tree.insert(20))
inspect(tree.insert(50))
inspect(tree.insert(23))

// Search from tree
//console.log(inspect(tree.find('S'), { showHidden: true, depth: null }))

// Show min value of the tree
//console.log(tree.min())

// Show max value of the tree
//console.log(tree.max())

// Find equal or less value than the given value
//console.log(tree.floor(41))

// Find equal or greater value than the given value
//console.log(tree.ceiling(75))

// Get tree as a sorted array
//console.log(tree.sort())

// Delete from the tree
//tree.delete(22)

// Show the whole tree
console.log(inspect(tree.show(), { showHidden: true, depth: null }))