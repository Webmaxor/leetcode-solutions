function keyIndexedCounting(list = {}, R) {
  const sections = list.sections
  const names = list.names
  const count = Array(R + 1).fill(0)
  const aux = []
  const auxNames = []

  for (let i = 0; i < sections.length; i++) {
    count[sections[i]]++
  }

  for (let i = 0; i < R; i++) {
    count[i + 1] += count[i]
  }

  for (let i = 0; i < sections.length; i++) {
    const newPosition = count[sections[i] - 1]++
    auxNames[newPosition] = names[i]
    aux[newPosition] = sections[i]
  }

  return {
    names: auxNames,
    sections: aux
  }
}

/**
 * USAGE
 */
const list = {
  names: [
    'Anderson', 'Brown', 'Davis', 'Garcia', 'Harris', 'Jackson', 'Johnson', 'Jones',
    'Martin', 'Martines', 'Miller', 'Moore', 'Robinson', 'Smith', 'Taylor', 'Thomas',
    'Thompson', 'White', 'Williams', 'Wilson'
  ],
  sections: [ 2, 3, 3, 4, 1, 3, 4, 3, 1, 2, 2, 1, 2, 4, 3, 4, 4, 2, 3, 4  ]
}

console.log(keyIndexedCounting(list, 4))