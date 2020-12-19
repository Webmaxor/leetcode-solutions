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
    this.R = 128
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

  get(key, value = false) {
    const node = this.getHelper(this.root, key, 0)

    if (node == null) {
      return null
    }

    return value ? node.value : node
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

  keys() {
    // Collect all keys into queue in a sorted order
    const queue = []
    this.collect(this.root, "", queue)
    return queue
  }

  collect(node, prefix = "", queue = []) {
    if (node == null) {
      return
    }

    if (node.value !== null) {
      queue.push(prefix)
    }

    for (let c = 0; c < this.R; c++) {
      this.collect(node.next[c], prefix + String.fromCharCode(c), queue)
    }
  }

  keysWithPrefix(prefix = "") {
    // Collect all keys into queue in a sorted order
    const queue = []
    const node = this.get(prefix)

    this.collect(node, prefix, queue)

    return queue
  }

  longestPrefixOf(query) {
    const length = this.search(this.root, query, 0, 0)
    return query.substring(0, length)
  }

  search(node, query, d, length) {
    if (node == null) {
      return length
    }

    if (node.value !== null) {
      length = d
    }

    if (d == query.length) {
      return length
    }

    const c = query.charCodeAt(d)

    return this.search(node.next[c], query, d + 1, length)
  }

  wildcardMatch(query) {
    const queue = []
    this.wildcardMatchHelper(this.root, query, "", 0, queue)
    return queue
  }

  wildcardMatchHelper(node, query, prefix = "", d, queue) {
    if (node == null) {
      return
    }

    if (node.value !== null) {
      queue.push(prefix)
    }

    // Wildcard is spotted
    if (query.charAt(d) === '.') {
      // Search from all children
      for (let c = 0; c < this.R; c++) {
        this.wildcardMatchHelper(node.next[c], query, prefix + String.fromCharCode(c), d + 1, queue)
      }
    } else {
      this.wildcardMatchHelper(node.next[query.charCodeAt(d)], query, prefix + query.charAt(d), d + 1, queue)
    }
  }
}

/**
 * USAGE
 */
const trie = new TrieST()
trie.put('shells', 15)
trie.put('by', 4)
trie.put('bare', 12)
trie.put('sea', 14)
trie.put('sells', 11)
trie.put('she', 10)
trie.put('shore', 17)
trie.put('sur', 0)
trie.put('surely', 13)
trie.put('the', 8)

//console.log(trie.keys())
//console.log(trie.keysWithPrefix('sh'))
//console.log(trie.longestPrefixOf('shellsort'))
console.log(trie.wildcardMatch('.he'))