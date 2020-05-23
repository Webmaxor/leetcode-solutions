const LinkedList = require('../linked-list/linked-list')

class Stack {
  constructor() {
    // Creates an empty stack
    this.linkedList = new LinkedList()
  }

  push(item) {
    // Inserts a new string onto stack
    this.linkedList.unshift(item)
  }

  pop() {
    // removes and returns the most recently added
    this.linkedList.shift()
  }

  isEmpty() {
    // is the stack empty?
    return this.linkedList.head == null
  }

  show() {
    return this.linkedList.head
  }
}

const stack = new Stack()
stack.push(1)
stack.push(3)
stack.push(8)
stack.pop()

console.log(stack.show())