function MSDsort(list = []) {
  // ASCII characters count.
  const R = 128
  const aux = Array(list.length).fill('')

  // Start sorting
  keyIndexedCounting(0, list.length - 1, 0)

  // Define recursive function
  function keyIndexedCounting(low, high, d) {
    if (high <= low) {
      return
    }

    // Flush/redefine count array
    const count = Array(R + 1).fill(0)

    for (let i = low; i <= high; i++) {
      count[charCodeAt(list[i], d) + 2]++
    }

    for (let i = 0; i < R + 1; i++) {
      count[i + 1] += count[i]
    }

    for (let i = low; i <= high; i++) {
      aux[count[charCodeAt(list[i], d) + 1]++] = list[i]
    }

    for (let i = low; i <= high; i++) {
      list[i] = aux[i - low]
    }

    // Continue sorting in the groups
    for (let i = 0; i < R; i++) {
      // Sort by next (d + 1) symbol
      keyIndexedCounting(low + count[i], low + count[i + 1] - 1, d + 1)
    }
  }

  // We need -1 in case string length is not greater than d
  // By this way we can sort variable strings (various length strings)
  function charCodeAt(str, d) {
    if (d < str.length) {
      return str.charCodeAt(d)
    } else {
      return -1
    }
  }
}

/**
 * USAGE
 */
const list = [ 'dab', 'cab', 'ebb', 'add', 'fad', 'bad', 'dad', 'fed', 'bed', 'fee', 'bee', 'ace' ]

// Run sort
MSDsort(list)

// Show results
console.log(list)