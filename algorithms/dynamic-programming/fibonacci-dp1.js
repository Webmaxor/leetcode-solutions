function fibonacci(n, cache = null) {
  if (!cache) {
    cache = Array(n + 1).fill(null).map(() => -1)
  }

  if (cache[n] === -1) {
    if (n <= 1) {
      cache[n] = n
    } else {
      cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache)
    }
  }

  return cache[n]
}

/**
 * USAGE
 */
console.log(fibonacci(7))