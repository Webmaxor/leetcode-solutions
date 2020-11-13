/**
 * Get vertices in topological order
 * @param {Array} graph
 */
function topologicalSort(graph) {
  let marked = Array(graph.length).map(() => false)
  const stack = []

  // Run dfs from first vertex. It fills marked array completely if all vertices are connected each other
  for (let i = 0; i < graph.length; i++) {
    if (!marked[i]) {
      dfs(i)
    }
  }

  function dfs(vertex) {
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

    stack.push(vertex)
  }

  // Return stack in reverse order
  return stack.reverse()
}

/**
 * USAGE
 */

// Declare directed graph
const graph = [[1, 5, 2], [4], [], [6, 2, 5, 4], [], [2], [4]]


// Get vertices in topological order
console.log(topologicalSort(graph)) // [3, 6, 0, 5, 2, 1, 4]