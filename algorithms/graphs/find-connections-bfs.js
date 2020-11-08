const AdjacencyListGraph = require('./adjacency-list-graph')

/**
 * Find all vertices connected to s (and a corresponding path).
 * @param {Array} graph
 * @param {Object} s
 */
function findConnections(graph, s) {
  const distTo = Array(graph.length).map(() => null)
  const edgeTo = Array(graph.length).map(() => null)
  const found = []
  const queue = []
  let steps = 0

  // Add given vertex to queue
  queue.push(s)

  // Add a step for given vertex
  distTo[s] = steps

  while (queue.length) {
    // Get vertex from queue
    vertex = queue.shift()

    // Increase steps
    steps++

    // Iterate edges of the current vertex
    for (let edge of graph[vertex]) {
      // Check if edge is not visited yet
      if (distTo[edge] == null) {
        // Add unvisited vertex to queue
        queue.push(edge)

        // Set steps count
        distTo[edge] = steps

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