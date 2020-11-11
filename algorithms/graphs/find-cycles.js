/**
 * Find all cycles (Note: this function does not find hierarchic cycles)
 * @param {Array} graph
 */
function findCycles(graph) {
  let cycles = {}
  let marked, path

  // Iterate graph vertices.
  for (let i = 0; i < graph.length; i++) {
    // Clear marked and path when starting to traverse
    marked = []
    path = []

    dfs(i)
  }

  function dfs(vertex) {
    // Mark vertex as visited
    marked[vertex] = true

    // Check if path is empty or
    // The last vertex of path has edge to current vertex
    if (!path.length || graph[path[path.length - 1]].indexOf(vertex) !== -1) {
      // Add vertex to path
      path.push(vertex)

      // Detect cycle if path length > 2 and path's last vertex has edge to the first vertex
      if (path.length > 2 && graph[vertex].indexOf(path[0]) !== -1) {
        // We use dictionary to save unique values only
        cycles[[...path].sort((a,b) => a - b).join('')] = [...path]
      }
    }

    // Iterate edges of the current vertex
    for (let i = 0; i < graph[vertex].length; i++) {
      // Check if edge is not visited yet
      if (!marked[graph[vertex][i]]) {
        // Re-run function for the current edge
        dfs(graph[vertex][i])
      }
    }
  }

  // Return cycles in array
  return Object.values(cycles);
}

/**
 * USAGE
 */

// Declare graph in edge list
const graph = [[1, 4, 3], [0, 5], [6, 3], [7, 2, 0], [0, 5], [1, 4], [2, 7], [6, 3]]


// Find cycles
console.log(findCycles(graph))