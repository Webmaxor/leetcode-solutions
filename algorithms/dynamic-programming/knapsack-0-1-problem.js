
function knapsack(kWeight, weights, values) {
  const N = weights.length

  // Fill with 0
  const items = Array(N + 1).fill(null).map(() => Array(kWeight + 1).fill(0))

  for (let item = 1; item <= N; item++) {
    for (let capacity = 1; capacity <= kWeight; capacity++) {
      // Value from previous item
      const previousVal = items[item - 1][capacity]

      // Initialize curent value
      let currentVal = 0

      // Get current weight from weights
      const currentWeight = weights[item - 1]

      // If knapsack capacity is equal or greater than current weight,
      // Process calculations of currentVal
      if (capacity >= currentWeight) {
        currentVal = values[item - 1]

        const remainingCapacity = capacity - currentWeight
        currentVal += items[item - 1][remainingCapacity]
      }

      // Pick the larger one of the two items to fill the array/table
      items[item][capacity] = Math.max(previousVal, currentVal)
    }
  }

  // Return max value
  return items[N][kWeight]
}


/**
 * USAGE
 */
console.log(knapsack(10, [5, 4, 6, 3], [10, 40, 30, 50]))