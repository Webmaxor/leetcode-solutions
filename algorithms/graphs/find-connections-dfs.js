const AdjacencyListGraph = require('./adjacency-list-graph')

/**
 * Find all vertices connected to s (and a corresponding path).
 * @param {Array} graph
 * @param {Object} s
 */
function findConnections(graph, s) {
  const marked = Array(graph.length).map(() => false)
  const edgeTo = Array(graph.length).map(() => null)
  const found = []

  // Run recursive helper function
  dfsHelper(s)

  function dfsHelper(vertex) {
    // Mark vertex as visited
    marked[vertex] = true

    // Iterate edges of the current vertex
    for (let edge of graph[vertex]) {
      // Check if edge is not visited yet
      if (!marked[edge]) {
        // Re-run function for the current edge
        dfsHelper(edge)

        // Add vertex to edgeTo list to keep path
        edgeTo[edge] = vertex

        // Add connected vertices
        found.push(edge)
      }
    }
  }

  // Return connected vertices
  return found
}

/**
 * USAGE
 */

// Create a graph of 10 vertices
const graph = new AdjacencyListGraph(10)

// Add edges
graph.addEdge(0,1)
graph.addEdge(0,2)
graph.addEdge(0,6)
graph.addEdge(0,5)
graph.addEdge(6,4)
graph.addEdge(4,3)
graph.addEdge(4,5)
graph.addEdge(3,5)


// Get all connected vertices 0 vertex
console.log(findConnections(graph.get(), 0))