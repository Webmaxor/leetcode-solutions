const range = {
  from: 1,
  to: 10
}

// Make object range iterable
range[Symbol.iterator] = function() {
  let current = this.from
  const last = this.to

  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++
        }
      }
      else {
        return {
          done: true
        }
      }
    }
  }
}

/**
 * Usage
 */
for (let num of range) {
  console.log(num)
}

// Prints 1,2,3,...,10. Iterator is sexy especially when applying it to a wide range of values
console.log(...range)