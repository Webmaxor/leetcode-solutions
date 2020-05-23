class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    // Implement list head
    this.head = null
  }

  // Adds to the beginning of the linked list
  unshift(data) {
    // A newNode object is created with property data and next = null
    const newNode = new Node(data)

    // The pointer next is assigned head pointer so that both pointers now point at the same node.
    newNode.next = this.head

    // As we are inserting at the beginning the head pointer needs to now point at the newNode.
    this.head = newNode

    return this.head
  }

  // Adds to the end of the linked list
  push(data) {
    // A newNode object is created with property data and next=null
    const newNode = new Node(data)

    // When head = null i.e. the list is empty, then head itself will point to the newNode.
    if (!this.head) {
      this.head = newNode
      return this.head
    }

    // Else traverse the list to find the tail (the tail node will initially be pointing at null), and update tail's pointer
    let tail = this.head
    while (tail.next !== null) {
      tail = tail.next
    }
    tail.next = newNode

    return this.head
  }

  // A helper function getAt() is defined to get the desired position
  getAt(index) {
    let counter = 0
    let node = this.head

    while(node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }
  }

  // Function contains the steps to insert a node at a given index
  insertAt(data, index) {
    // if the list is empty i.e. head = null
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    // if new node needs to be inserted at the front of the list i.e. before the head.
    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    // else, use getAt() to find the previous node.
    const previous = this.getAt(index - 1)
    const newNode = new Node(data)
    newNode.next = previous.next
    previous.next = newNode

    return this.head
  }

  // Delete first item
  shift() {
    if (!this.head) {
      return
    }

    this.head = this.head.next
    return this.head
  }

  // Delete last item
  pop() {
    if (!this.head) {
      return
    }

    if (!this.head.next) {
      this.head = null
      return
    }

    let previous = this.head
    let tail = this.head.next

    while (tail.next !== null) {
      previous = tail
      tail = tail.next
    }

    previous.next = null
    return this.head
  }

  // Delete item from position
  deleteAt(index) {
    if (!this.head) {
      return
    }

    // node needs to be deleted from the front of the list i.e. before the head.
    if (index === 0) {
      this.head = this.head.next
      return
    }

    // else, use getAt() to find the previous node.
    const previous = this.getAt(index - 1)

    if (!previous || !previous.next) {
      return
    }

    previous.next = previous.next.next
    return this.head
  }

  // Delete linked list
  deleteList() {
    this.head = null
  }
}

module.exports = LinkedList