// In nodeJS, use util library to show the whole hierarchy of the tree
const { inspect } = require('util')
const BinarySearchTree = require('./binary-search-trees')

// Helper class to create tree's node
class RedBlackNode {
  constructor(value, color) {
    this.value = value
    this.color = color

    // Tree node should have two edges
    this.left = null
    this.right = null
  }
}

// Define red and black
const RED = true
const BLACK = false

class RedBlackTree extends BinarySearchTree {
  rotateLeft(node) {
    // Create a new node based on parent's right node
    const newNode = node.right

    // Assign right child's left child to parent's right child
    node.right = newNode.left

    // Set current parent to right child's left child (rotate left)
    newNode.left = node

    // Keep colors
    newNode.color = node.color

    // Keep colors (in our case red)
    node.color = RED

    return newNode
  }

  rotateRight(node) {
    // Create a new node based on parent's left node
    const newNode = node.left

    // Assign left child's right child to parent's keft child
    node.left = newNode.right

    // Set current parent to left child's right child (rotate right)
    newNode.right = node

    // Keep colors
    newNode.color = node.color

    // Keep colors (in our case red)
    node.color = RED

    return newNode
  }

  flipColors(node) {
    // Red link attaches middle node to a parent
    node.color = RED

    // Change color of the left and right children
    node.left.color = BLACK
    node.right.color = BLACK

    return node
  }

  isRed(node) {
    if (!node) {
      return false
    }

    return node.color == RED
  }

  // Insert a new value to a tree
  insert(value) {
    // If value is empty, just return the tree
    if (!value) {
      return
    }

    // Start looking for from the root
    this.root = this.insertNode(this.root, value)

    // Keep root's color black
    this.root.color = BLACK
  }

  // Recursive function to search for position to insert a new node
  insertNode(node, value) {
    // Insert at bottom (and color it red)
    if (node == null) {
      return new RedBlackNode(value, RED)
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

    // Right child is red, left child is black, then rotate left
    if (this.isRed(node.right) && !this.isRed(node.left)) {
      node = this.rotateLeft(node)
    }

    // Left child, left-left grandchild are red, then rotate right
    if (this.isRed(node.left) && this.isRed(node.left.left)) {
      node = this.rotateRight(node)
    }

    // Both children are red, then flip colors
    if (this.isRed(node.left) && this.isRed(node.right)) {
      this.flipColors(node)
    }

    return node
  }
}

module.exports = RedBlackTree

/**
 * USAGE
 */

// Create a new empty tree
const tree = new RedBlackTree()

// Fill the tree
tree.insert('A')
tree.insert('E')
tree.insert('S')
tree.insert('R')
tree.insert('C')

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