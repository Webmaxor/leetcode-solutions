class Queue {
  constructor() {
    // Creates an empty queue
    this.arr = []
  }

  enqueue(item) {
    // Inserts a new string onto queue
    return this.arr.push(item)
  }

  dequeue() {
    // removes and returns the first value
    return this.arr.shift()
  }

  isEmpty() {
    // is the queue empty?
    return this.arr.length === 0
  }

  show() {
    return this.arr
  }
}

module.exports = Queue

/**
 * Usage
 */
// const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(3)
// queue.enqueue(8)
// queue.dequeue()
// queue.enqueue(5)
// console.log(queue.show())