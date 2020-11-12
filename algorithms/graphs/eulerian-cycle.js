/**
 * Find a (general) cycle that uses every edge exactly once (Eulerian path / cycle / circuit)
 * @param {Array} graph
 */
function eulerianCycle(graph) {
  let marked = [], path = [], cycle = []
  const start = 0

  // Start from first wertex
  dfs(start)

  function dfs(vertex) {
    // Check if path is empty or
    // The last vertex of path has edge to current vertex
    if (!path.length || graph[path[path.length - 1]].indexOf(vertex) !== -1) {
      // Add vertex to path
      path.push(vertex)

      // Detect cycle if path length > 2 and path's last vertex has edge to the first vertex
      if (path.length > 2 && path.length > graph.length && graph[vertex].indexOf(path[0]) !== -1 && !marked[getIndex(start, vertex)]) {
        // Add start point to the path and assign the path to cycle
        cycle = [...path, start]
        path = []
      }
    }

    // Iterate edges of the current vertex
    for (let i = 0; i < graph[vertex].length; i++) {
      const edge = getIndex(graph[vertex][i], vertex)

      // Check if edge is not visited yet
      if (!marked[edge]) {
        marked[edge] = true

        // Re-run function for the current linked vertex
        dfs(graph[vertex][i])
      }
    }
  }

  function getIndex(v1, v2) {
    return [v1, v2].sort((a,b) => a - b).join('-')
  }

  // Start from first vertex, return cycle
  return cycle
}

/**
 * USAGE
 */

// Declare graph
// -------------------
// |    5 ---- 0     |
// |    |    / | \   |
// | 3 --- 2 ----- 1 |
// |  \ | /    |     |
// |    4 ---- 6     |
// -------------------
const graph = [[1, 6, 2, 5], [0, 2], [0, 1, 3, 4], [2, 4], [3, 5, 2, 6], [0, 4], [0, 4]]

// Find cycles
console.log(eulerianCycle(graph)) // [ 0, 1, 2, 0, 6, 4, 3, 2, 4, 5, 0 ]