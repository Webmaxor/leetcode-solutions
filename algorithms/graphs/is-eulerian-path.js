/**
 * Check if graph is Eulerian path
 * @param {Array} graph
 */
function isEulerianPath(graph) {
  let marked = Array(graph.length).map(() => false)
  let odds = 0

  // Start from first vertex
  dfs(0)

  // Run dfs from first vertex. It fills marked array completely if all vertices are connected each other
  for (let i = 0; i < marked.length; i++) {
    if (!marked[i]) {
      return false
    }
  }

  function dfs(vertex) {
    // Eulerian path can't have odd degrees
    if (graph[vertex].length % 2 === 1) {
      odds++
    }

    if (odds > 2) {
      return false
    }

    // Mark vertex as visited
    marked[vertex] = true

    // Iterate edges of the current vertex
    for (let i = 0; i < graph[vertex].length; i++) {
      // Check if edge vertex is not visited yet
      if (!marked[graph[vertex][i]]) {
        // Re-run function for the current linked vertex
        dfs(graph[vertex][i])
      }
    }
  }

  // Since we are here, graph is Eulerian path
  return true
}

/**
 * USAGE
 */

// Declare graph. The seven bridges of Konigsberg
let graph = [[1, 2, 3], [0, 2, 2], [1, 1, 3, 3], [0, 2, 2]]

// Check if graph is Eulerian path
console.log(isEulerianPath(graph))

// Declare graph. The seven bridges of Konigsberg. Add extra bridge between 1 and 3.
graph = [[1, 2, 3], [0, 2, 2, 3], [1, 1, 3, 3], [0, 2, 2, 1]]

// Check if graph is Eulerian path
console.log(isEulerianPath(graph))
