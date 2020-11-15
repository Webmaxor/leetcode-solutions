class StronglyConnectedComponents {
  constructor(graph) {
    // Get built-in graph
    this.graph = graph

    // Create component id indexes. Later we fill it
    this.id = Array(graph.length).map(() => null)

    // Create marked checking indexes
    this.marked = Array(graph.length).map(() => false)

    // Component id increment
    this.count = 0

    // Get vertices from reverse graph in a topological order
    this.topologicalOrder = this.depthFirstOrder(this.reverseGraph(this.graph))

    // Iterate graph's all vertices
    for (let i = 0; i < this.topologicalOrder.length; i++) {
      // If vertex is not visited yet, run depth first search
      if (!this.marked[this.topologicalOrder[i]]) {
        this.depthFirstSearch(this.topologicalOrder[i])

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

  // returns graph vertices in a topological order (same as topological sort)
  depthFirstOrder(graph) {
    let marked = Array(graph.length).map(() => false)
    const stack = []

    // Run dfs from first vertex.
    // It fills marked array completely if all vertices are connected each other
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

    // Return stack
    return stack.reverse()
  }

  // Get number of components
  getCount() {
    return this.count
  }

  // Get component id of vertex
  getId(vertex) {
    return this.id[vertex]
  }

  // Reverse the directed graph
  reverseGraph(graph) {
    const reverseGraph = [...Array(graph.length)].map(() => [])

    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph[i].length; j++) {
        reverseGraph[graph[i][j]].push(i)
      }
    }

    return reverseGraph
  }
}

module.exports = StronglyConnectedComponents


/**
 * USAGE
 */

// Create a graph of 10 vertices
// const graph = [[1,5], [], [0,3], [2,5], [2,3], [4], [0,4,8,9], [6,9], [6], [10,11], [12], [12, 4], [9]]

// Initialize connected components
// const components = new StronglyConnectedComponents(graph)

// Get all ids
// console.log(components.id)

// Check if vertices are connected
// console.log('0-3', components.getId(0) === components.getId(3))
// console.log('7-8', components.getId(7) === components.getId(8))
// console.log('4-8', components.getId(4) === components.getId(8))
// console.log('1-9', components.getId(1) === components.getId(9))