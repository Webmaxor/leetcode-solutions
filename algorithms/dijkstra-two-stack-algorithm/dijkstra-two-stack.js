// Use of Stack implemented by linked list
const Stack = require('../stack/stack-w-linked-list')

// Use of Stack implemented by array
//const Stack = require('../stack/stack-w-array')

function dijkstraTwoStacks(expression = null) {
  if (!expression) return 0

  const operators = new Stack()
  const values = new Stack()
  const tokens = expression.split(" ")

  for (let token of tokens) {
    switch (token) {
      case "(":
        // Ignore left parenthesis
      break

      case "+":
      case "-":
      case "*":
      case "/":
      case "sqrt":
        // Push operator to a operators stack
        operators.push(token)
      break

      case ")":
        // Take latest added values from stack (It removes the taken value from stack)
        const op = operators.pop()
        let val = values.pop()

        // Perform operations
        switch (op) {
          case "+":
            val = values.pop() + val
          break
          case "-":
            val = values.pop() - val
          break
          case "*":
            val = values.pop() * val
          break
          case "/":
            val = values.pop() / val
          break
          case "sqrt":
            val = Math.sqrt(val)
          break
        }

        // Put the result to values stack
        values.push(val)
      break
      default:
        const num = parseFloat(token, 10)

        if (!isNaN(num)) {
          // Add number to values stack
          values.push(num)
        }
        else {
          throw `It looks like "${token}" is not a number`
        }
      break;
    }
  }

  // Return the last result (expecting expression format is correct)
  return values.pop()
}

/**
 * Usage
 */
// const result = dijkstraTwoStacks("( ( 1 + sqrt ( 5.0 ) ) / 2.0 )")
// console.log(result)