function integers() {
  let i = 0
  return {
    next() { return { value: i++ }},
    [Symbol.iterator]() { return this }
  }
}

function take(n, iterator) {
  return {
    next() {
      for (i of iterator) {
        if (i > n) {
          return {
            done: true
          }
        }
        else {
          return {
            value: i,
            done: false
          }
        }
      }
    },
    [Symbol.iterator]() { return this }
  }
}

/**
 * Usage
 */
const iterator = integers()
for (let item of take(3, iterator)) {
  console.log(item)
}
// returns 0 1 2 3