class Stack {
  constructor() {
    // Creates an empty stack
    this.arr = []
  }

  push(item) {
    // Inserts a new string onto stack
    this.arr.push(item)
  }

  pop() {
    // removes and returns the most recently added
    this.arr.pop()
  }

  isEmpty() {
    // is the stack empty?
    return this.arr.length
  }

  show() {
    return this.arr
  }
}

const stack = new Stack()
stack.push(1)
stack.push(3)
stack.push(8)
stack.pop()

console.log(stack.show())