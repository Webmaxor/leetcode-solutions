// In nodeJS, use util library to show the whole hierarchy of the tree
const { inspect } = require('util')

// Trie node
class Node {
  constructor() {
    this.value = null
    this.char = null
    this.left = null
    this.mid = null
    this.right = null
  }
}

class TernarySearchTrie {
  constructor() {
    this.root = new Node()
  }

  put(key, value) {
    this.root = this.putHelper(this.root, key, value, 0)
  }

  // Recursive function to find the position and add value
  putHelper(node, key, value, d = 0) {
    // Get the character number
    const char = key.charCodeAt(d)

    // Node not found. Create a new node
    if (node == null) {
      node = new Node()
      node.char = char
    }

    // Character is smaller than current node character
    if (char < node.char) {
      // Continue searching from left
      node.left = this.putHelper(node.left, key, value, d)
    }
    // Character is larger than current node character
    else if (char > node.char) {
      // Continue searching from right
      node.right = this.putHelper(node.right, key, value, d)
    }
    // Character found but key search is not done yet
    else if (d < key.length - 1) {
      // Continue searching from middle
      node.mid = this.putHelper(node.mid, key, value, d + 1)
    }
    // Character found and search is done
    else {
      // Assign a value
      node.value = value
    }

    return node
  }

  contains(key) {
    return this.get(key) !== null
  }

  get(key) {
    const node = this.getHelper(this.root, key, 0)

    if (node == null) {
      return null
    }

    return node.value
  }

  getHelper(node, key, d) {
    if (node == null) {
      return null
    }

    // Get the character number
    const char = key.charCodeAt(d)

    // Character is smaller than current node character
    if (char < node.char) {
      // Continue searching from left
      return this.getHelper(node.left, key, d)
    }
    // Character is larger than current node character
    else if (char > node.char) {
      // Continue searching from right
      return this.getHelper(node.right, key, d)
    }
    // Character found but key search is not done yet
    else if (d < key.length - 1) {
      // Continue searching from middle
      return this.getHelper(node.mid, key, d + 1)
    }
    // Character found and search is done
    else {
      return node
    }
  }
}

/**
 * USAGE
 */
const trie = new TernarySearchTrie()
trie.put('she', 5)

console.log(inspect(trie, { showHidden: true, depth: null }))
console.log(trie.get('she'))