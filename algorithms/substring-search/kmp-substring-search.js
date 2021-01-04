function KMPSearch(str, pattern) {
  const N = str.length
  const M = pattern.length
  const dfa = dfaGenerator(pattern)
  let i, j

  if (!N || !M) {
    return -1
  }

  for (i = 0, j = 0; i < N && j < M; i++) {
    j = dfa[str.charCodeAt(i)][j]
  }

  if (j === M) {
    return i - M
  } else {
    return N
  }

  function dfaGenerator(pattern) {
    const R = 128
    const M = pattern.length
    const dfa = [...Array(R).fill(null)].map(() => Array(M).fill(0))

    dfa[pattern.charCodeAt(0)][0] = 1

    for (let x = 0, j = 1; j < M; j++) {
      for (let c = 0; c < R; c++) {
        // Copy mismatched cases
        dfa[c][j] = dfa[c][x]

        // Set match case
        dfa[pattern.charCodeAt(j)][j] = j + 1

        // Update restart state
        x = dfa[pattern.charCodeAt(j)][x]
      }
    }

    return dfa
  }
}

/**
 * USAGE
 */
console.log(KMPSearch('AABACAABABACAA', 'ABABAC'))