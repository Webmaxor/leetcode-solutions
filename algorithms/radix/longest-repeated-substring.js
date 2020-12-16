function longestRepeatedSubstring(str = '') {
  const N = str.length;

  const suffixes = []
  for (let i = 0; i < N; i++) {
    suffixes.push(str.substring(i, N))
  }

  suffixes.sort((a,b) => a.localeCompare(b))

  let lrs = ''
  for (let i = 0; i < N - 1; i++) {
    let len = longestCommonPrefix(suffixes[i], suffixes[i + 1]).length

    if (len > lrs.length) {
      lrs = suffixes[i].substring(0, len)
    }
  }

  return lrs

  function longestCommonPrefix(str1, str2) {
    if (!str1.length || !str2.length) {
      return ''
    }

    let lcp = ''
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
      if (str1[i] !== str2[i]) {
        return lcp
      }

      lcp += str1[i]
    }

    return lcp
  }
}

/**
 * USAGE
 */
console.log(longestRepeatedSubstring('aacaagtttacaagc'))