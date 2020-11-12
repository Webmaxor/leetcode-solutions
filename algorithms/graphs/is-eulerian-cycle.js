/**
 * Check if graph is Eulerian cycle
 * @param {Array} graph
 */
function isEulerianCycle(graph) {
  let marked = Array(graph.length).map(() => false)

  // Start from first vertex
  dfs(0)

  // Run dfs from first vertex. It fills marked array completely if all vertices are connected each other
  for (let i = 0; i < marked.length; i++) {
    if (!marked[i]) {
      return false
    }
  }

  function dfs(vertex) {
    // Eulerian cycle can't have odd degrees
    if (graph[vertex].length % 2 === 1) {
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

  // Since we are here, graph is Eulerian cycle
  return true
}

/**
 * USAGE
 */

// Declare graph
const graph = [[1, 6, 2, 5], [0, 2], [0, 1, 3, 4], [2, 4], [3, 5, 2, 6], [0, 4], [0, 4]]


// Check if graph is Eulerian cycle
console.log(isEulerianCycle(graph))