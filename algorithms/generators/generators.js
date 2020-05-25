// 1. Generator function declaration
function* increment(i) {
  yield i + 1
  yield i + 2
}

/**
 * Usage
 */
const obj = increment(10)
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())


// 2. Generator function expression
const increment = function* (i) {
  yield i + 1
  yield i + 2
}

/**
 * Usage
 */
const obj = increment(10)
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())


// 3. Generator method definition in object literals
const obj = {
  * increment(i) {
    yield i + 1
    yield i + 2
  }
}

/**
 * Usage
 */
const inc = obj.increment(10)
console.log(inc.next())
console.log(inc.next())
console.log(inc.next())


// 4. Generator method definition in class definitions
class Gen {
  * increment(i) {
    yield i + 1
    yield i + 2
  }
}

/**
 * Usage
 */
const obj = new Gen()
const inc = obj.increment(10)
console.log(inc.next())
console.log(inc.next())
console.log(inc.next())