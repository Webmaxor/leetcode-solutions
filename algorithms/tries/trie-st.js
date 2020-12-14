// Trie node
class Node {
  constructor() {
    // Radix number is ASCII numbers count
    const R = 128

    this.value = null
    this.next = Array(R).fill(null)
  }
}

class TrieST {
  constructor() {
    this.root = new Node()
  }

  put(key, value) {
    this.root = this.putHelper(this.root, key, value, 0)
  }

  // Recursive function to find the position and add value
  putHelper(node, key, value, d = 0) {
    // Node not found. Create a new node
    if (node == null) {
      node = new Node()
    }

    // Key found in trie. Update value
    if (d === key.length) {
      node.value = value
      return node
    }

    // Get the character number
    const char = key.charCodeAt(d)

    // Continue search from child
    node.next[char] = this.putHelper(node.next[char], key, value, d + 1)

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

    if (d === key.length) {
      return node
    }

    // Get the character number
    const char = key.charCodeAt(d)

    // Continue search from child
    return this.getHelper(node.next[char], key, d + 1)

  }
}

/**
 * USAGE
 */
const trie = new TrieST()
trie.put('she', 5)

console.log(trie.get('she'))