function dijkstraTwoStacks(expression = null) {
  if (!expression) return

  const valueStack = []
  const operatorStack = []
  const operators = ["+", "-", "*", "/", "sqrt"]
  const tokens = expression.split(" ")

  for (let token of tokens) {
    // Ochiq qavsni tashlab ketamiz
    if (token === "(") continue

    if (operators.includes(token)) {
      operatorStack.push(token)
    }
    else if (token === ")") {
      // Qavs yopilganda amal bajaramiz.

      // Stackdan birinchi qiymatni olamiz
      let val = valueStack.pop()

      // Ohirgi operatorni stackdan olamiz.
      // Hisob uchun kerak bo'lsa, ikkinchi qiymatni ham stackdan olamiz.
      switch (operatorStack.pop()) {
        case "+":
          val = val + valueStack.pop()
        break
        case "-":
          val = val - valueStack.pop()
          break
        case "*":
          val = val * valueStack.pop()
        break
        case "/":
          val = val / valueStack.pop()
        break
        case "sqrt":
          val = Math.sqrt(val)
        break
      }

      // Yangi qiymatni value stackga qaytaramiz
      valueStack.push(val)
    }
    else {
      // Sonlarni value stackga yig'amiz
      const num = parseFloat(token, 10)

      if (!isNaN(num)) {
        valueStack.push(num)
      }
      else {
        throw `${token} raqam emas`
      }
    }
  }

  return valueStack.pop()
}

/**
 * Usage
 */
const result = dijkstraTwoStacks("( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )")
console.log(result)