class BinaryHeap {
  constructor(arr = [], asc = true) {
    this.arr = arr
    this.asc = asc
  }

  enqueue(item) {
    // Add new item to array
    this.arr[this.arr.length === 0 ? 1 : this.arr.length] = item

    // Fix its position
    this.swim(this.arr.length - 1)
  }

  dequeue() {
    let max = this.arr[1]

    // Swap first and last values
    this.arr[1] = this.arr[this.arr.length - 1]
    this.arr[this.arr.length - 1] = max

    // Delete last value (dequeue)
    this.arr.pop()

    // Fix first value's position
    this.sink(1)

    return max
  }

  swim(index) {
    while (index > 1 &&
      (
        this.asc && this.arr[Math.floor(index / 2)] > this.arr[index] ||
        !this.asc && this.arr[Math.floor(index / 2)] < this.arr[index]
      )
    ) {
      // Swap parent and child
      [this.arr[index], this.arr[Math.floor(index / 2)]] = [this.arr[Math.floor(index / 2)], this.arr[index]]
      index = Math.floor(index / 2)
    }
  }

  sink(index) {
    while (Math.floor(index / 2) <= this.arr.length) {
      let j = 2 * index

      if (j < this.arr.length &&
        (
          this.asc && this.arr[j] > this.arr[j + 1] ||
          !this.asc && this.arr[j] < this.arr[j + 1]
        )
      ) {
        j++
      }

      if (!(this.asc && this.arr[index] > this.arr[j] || !this.asc && this.arr[index] < this.arr[j])) {
        break
      }

      [this.arr[index], this.arr[j]] = [this.arr[j], this.arr[index]]
      index = j
    }
  }

  isEmpty() {
    // is the queue empty?
    return this.arr.length < 2
  }

  show() {
    return this.arr
  }
}

/**
 * USAGE
 */
const binaryHeap = new BinaryHeap([], false)
binaryHeap.enqueue(3)
binaryHeap.enqueue(4)
binaryHeap.enqueue(6)
binaryHeap.enqueue(2)
binaryHeap.enqueue(9)
binaryHeap.enqueue(1)
binaryHeap.dequeue()
// binaryHeap.enqueue("H")
// binaryHeap.enqueue("I")
// binaryHeap.enqueue("E")
// binaryHeap.enqueue("A")
// binaryHeap.enqueue("G")
// binaryHeap.enqueue("O")
// binaryHeap.enqueue("N")
// binaryHeap.enqueue("P")
// binaryHeap.enqueue("R")
// binaryHeap.enqueue("S")
console.log(binaryHeap.show())