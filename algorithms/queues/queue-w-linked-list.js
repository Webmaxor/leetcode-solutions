const LinkedList = require('../linked-list/linked-list')

class Queue {
  constructor() {
    // Creates an empty queue
    this.linkedList = new LinkedList()
  }

  enqueue(item) {
    // Inserts a new string onto queue
    this.linkedList.push(item)
  }

  dequeue() {
    // removes and returns the first value
    this.linkedList.shift()
  }

  isEmpty() {
    // is the queue empty?
    return this.linkedList.head == null
  }

  show() {
    return this.linkedList.head
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