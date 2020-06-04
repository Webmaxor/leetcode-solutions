const mergeSort = require('../sorts/mergesort')

/**
 * Priority Queue with ordered array.
 * Running time. Insert: N. Delete max/min: 1. Get max: 1
 */
class PriorityQueueOrderedArray {
  constructor(arr = []) {
    this.arr = arr
    this.maxIndex = 0
    this.minIndex = 0
  }

  enqueue(item) {
    // Inserts a new item onto queue
    this.arr.push(item)

    // Sort array by mergesort
    mergeSort(this.arr)
  }

  dequeueMin() {
    // Delete first value
    return this.arr.shift()
  }

  dequeueMax() {
    // Delete first value
    return this.arr.pop()
  }

  isEmpty() {
    // is the queue empty?
    return this.arr.length === 0
  }

  show() {
    return this.arr
  }
}

const pqOrdered = new PriorityQueueOrderedArray([1,2,3,4,7,9])
pqOrdered.enqueue(5)
console.log(pqOrdered.show())