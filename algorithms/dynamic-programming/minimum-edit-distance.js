function minimumEditDistance(str1, str2) {
  const matrix = Array(str1.length + 1).fill(null).map(() => Array(str2.length + 1).fill(0))

  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0) {
        // Fill first row with j number
        matrix[i][j] = j
      } else if (j === 0) {
        // Fill first column with i number
        matrix[i][j] = i
      } else if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
        // Two characters are equal
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        // Get minimum value
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + 1,
        );
      }
    }
  }

  return matrix[str1.length][str2.length]
}

/**
 * USAGE
 */
console.log(minimumEditDistance('SITTING', 'KITTEN'))