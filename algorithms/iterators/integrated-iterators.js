const str = "Hello world"
const iterator = str[Symbol.iterator]()

/**
 * Usage
 */
while (true) {
  const result = iterator.next()
  if (result.done) break;
  console.log(result.value)
}
