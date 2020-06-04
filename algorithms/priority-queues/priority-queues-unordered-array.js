/**
 * Priority Queue with unordered array.
 * Running time. Insert: 1. Delete max/min: N. Get max: N
 */
class PriorityQueueUnorderedArray {
  constructor(arr = []) {
    this.arr = arr
    this.maxIndex = 0
    this.minIndex = 0
  }

  enqueue(item) {
    // Inserts a new string onto queue
    return this.arr.push(item)
  }

  setMaxIndex() {
    // Finds max value
    this.maxIndex = 0

    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[this.maxIndex] < this.arr[i]) {
        this.maxIndex = i
      }
    }

    return this.maxIndex
  }

  setMinIndex() {
    // Finds min value
    this.minIndex = 0

    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[this.minIndex] > this.arr[i]) {
        this.minIndex = i
      }
    }

    return this.minIndex
  }

  dequeueMax() {
    this.setMaxIndex()

    // Swap max value with the last one
    if (this.maxIndex !== this.arr.length - 1) {
      [this.arr[this.maxIndex], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[this.maxIndex]]
    }

    // Delete last value
    return this.arr.pop()
  }

  dequeueMin() {
    this.setMinIndex()

    // Swap min value with the last one
    if (this.minIndex !== this.arr.length - 1) {
      [this.arr[this.minIndex], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[this.minIndex]]
    }

    // Delete last value
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

// const pqUnordered = new PriorityQueueUnorderedArray([1,4,2,3,8,4,7,3,8,9])
// pqUnordered.dequeueMin()
// console.log(pqUnordered.show())