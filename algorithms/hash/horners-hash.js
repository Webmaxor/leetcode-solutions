/**
 * Implement Horner's hash function
 * @param {String} text
 */
String.prototype.hash = function() {
  let hash = 0
  for (i = 0; i < this.length; i++) {
    hash = this[i].charCodeAt() + (hash * 31)
  }
  return hash
}

/**
 * USAGE
 */

 // Save data
const arr = []
const index = "John Doe".hash()
arr[index] = {
  name: "John Doe",
  age: 30,
  occupation: "engineer"
}

// Read data
console.log(arr["John Doe".hash()])