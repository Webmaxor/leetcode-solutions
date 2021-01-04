function RKSearch(str, pattern) {
  const N = str.length
  const M = pattern.length
  const patHash = hornerHash(pattern, M)

  for (let i = 0; i < N - M; i++) {
    if (hornerHash(str.substring(i, i + M), M) === patHash) {
      return i;
    }
  }

  return -1


  // Hash function
  function hornerHash(str, M) {
    const R = 128
    const Q = 997
    let hash = 0

    for (let j = 0; j < M; j++) {
      hash = (R * hash + str.charCodeAt(j)) % Q;
    }

    return hash;
  }
}

/**
 * USAGE
 */
console.log(RKSearch("FINDINAHAYSTACKNEEDLEINA", "NEEDLE"))