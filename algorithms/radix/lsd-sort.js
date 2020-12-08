function LSDsort(list = [], W = 0) {
  // ASCII characters count.
  // It can be 128 as well if we don't use specific characters in a string
  const R = 256
  const listLength = list.length
  const aux = []

  for (d = W - 1; d >= 0; d--) {
    const count = Array(R + 1).fill(0)

    for (let i = 0; i < listLength; i++) {
      count[list[i].charCodeAt(d) + 1]++
    }

    for (let i = 0; i < R; i++) {
      count[i + 1] += count[i]
    }

    for (let i = 0; i < listLength; i++) {
      aux[count[list[i].charCodeAt(d)]++] = list[i]
    }

    for (let i = 0; i < listLength; i++) {
      list[i] = aux[i]
    }
  }
}

/**
 * USAGE
 */
const list = [ 'dab', 'cab', 'ebb', 'add', 'fad', 'bad', 'dad', 'fed', 'bed', 'fee', 'bee', 'ace' ]

// Run sort
LSDsort(list, 3)

// Show results
console.log(list)