function BMSearch(str, pattern) {
  const N = str.length
  const M = pattern.length
  const right = skipCalculation(pattern)
  let skip

  for (let i = 0; i <= N - M; i += skip) {
    skip = 0

    for (let j = M - 1; j >= 0; j--) {
      // Mismatch case
      if (pattern.charCodeAt(j) !== str.charCodeAt(i + j)) {
        // Calculate skip value
        skip = Math.max(1, j - right[str.charCodeAt(i + j)])
        break
      }
    }

    if (skip == 0) {
      return i
    }
  }

  return N

  function skipCalculation(pattern) {
    const R = 128
    const right = Array(R).fill(-1)

    for (let j = 0; j < pattern.length; j++) {
      right[pattern.charCodeAt(j)] = j
    }

    return right
  }
}

/**
 * USAGE
 */
console.log(BMSearch('FINDINAHAYSTACKNEEDLEINA', 'NEEDLE'))