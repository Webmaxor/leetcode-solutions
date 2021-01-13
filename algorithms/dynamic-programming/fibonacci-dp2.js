function fibonacci(n) {
  if (n <= 1) {
    return n
  }

  const f = [0, 1]
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n]
}

/**
 * USAGE
 */
console.log(fibonacci(7))