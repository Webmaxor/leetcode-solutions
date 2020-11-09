const AdjacencyListGraph = require('./adjacency-list-graph')

class ConnectedComponents {
  constructor(graph) {
    // Get built-in graph
    this.graph = graph

    // Create component id indexes. Later we fill it
    this.id = Array(graph.length).map(() => null)

    // Create marked checking indexes
    this.marked = Array(graph.length).map(() => false)

    // Component id increment
    this.count = 0

    // Iterate graph's all vertices
    for (let i = 0; i < this.graph.length; i++) {
      // If vertex is not visited yet, run depth first search
      if (!this.marked[i]) {
        this.depthFirstSearch(i)

        // Increment component id count
        this.count++
      }
    }
  }

  // Use depth first search to to fill component ids (this.id)
  depthFirstSearch(vertex) {
    this.marked[vertex] = true
    this.id[vertex] = this.count

    // Iterate edges of the current vertex
    for (let edge of this.graph[vertex]) {
      // Check if edge is not visited yet
      if (!this.marked[edge]) {
        // Re-run function for the current edge
        this.depthFirstSearch(edge)
      }
    }
  }

  // Get number of components
  getCount() {
    return this.count
  }

  // Get component id of vertex
  getId(vertex) {
    return this.id[vertex]
  }
}

module.exports = ConnectedComponents

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
graph.addEdge(7,8)

// Now we have this graph:
// - - - - - - - - - - - - - -
// |                         |
// |     -  0  -      7 - 8  |
// |   /   / \   \           |
// |  |   1   2   |     9    |
// |  |           6          |
// |  |   - 3 -   |          |
// |  | /       \ |          |
// |  5 - - - - - 4          |
// |                         |
// - - - - - - - - - - - - - -

// Initialize connected components
const components = new ConnectedComponents(graph.get())

// Get all ids
console.log(components.id)

// Check if vertices are connected
console.log('0-3', components.getId(0) === components.getId(3))
console.log('7-8', components.getId(7) === components.getId(8))
console.log('4-8', components.getId(4) === components.getId(8))
console.log('1-9', components.getId(1) === components.getId(9))