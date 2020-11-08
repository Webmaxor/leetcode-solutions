class AdjacencyListGraph {
  constructor(vCount, directed = false) {
    // Create empty vertices
    this.graph = Array(vCount).fill(null).map(() => new Set())

    // Determine if graph is directed or not
    this.directed = directed

    // Check if vertex is not visited yet (used in DFS)
    this.marked = Array(vCount).map(() => false)

    // Add vertex to edgeTo list to keep path (used in DFS)
    this.edgeTo = Array(vCount).map(() => null)
  }

  // Adds edges between two vertices
  addEdge(v1, v2) {
    // We can't add edge to a missing vertex
    if (!this.graph[v1] || !this.graph[v2]) {
      return
    }

    this.graph[v1].add(v2)

    // If graph is not directed, add parallel edges
    if (!this.directed) {
      this.graph[v2].add(v1)
    }
  }

  get() {
    return this.graph
  }

  // Returns neighbors (edges) count
  degree(v) {
    if (!this.graph[v]) {
      return 0
    }

    return this.graph[v].size
  }

  // Checks if two vertices have an edge
  hasEdge(v1, v2) {
    // One of vertices not found
    if (!this.graph[v1] || !this.graph[v2]) {
      return false
    }

    // Just one checking would be enough for undirected graph,
    // and vector is v1 -> v2 for directed graph
    return this.graph[v1].has(v2)
  }

  // Deep first search
  deepFirstSearch(vertex, callback = null) {
    // Mark the vertex as visited
    this.marked[vertex] = true

    for (let edge of this.graph[vertex]) {
      // Check if edge is not visited yet
      if (!this.marked[edge]) {
        // Re-run function for the current edge
        this.deepFirstSearch(edge, callback)

        // Add vertex to edgeTo list to keep path
        this.edgeTo[edge] = vertex

        // Run callback function
        if (callback) {
          callback(edge)
        }
      }
    }
  }

  // Find all vertices connected to vertex (and a corresponding path)
  findConnections(vertex) {
    // If vertex does not exist, stop executing
    if (!this.graph[vertex]) {
      return []
    }

    // Collect all found items in found array
    const found = []

    // Use deep first search to collect found items
    this.deepFirstSearch(vertex, (item) => found.push(item))

    return found
  }

  // Returns a path between two vertices (if path exists)
  getPath(v1, v2) {
    // One of vertices not found
    if (!this.graph[v1] || !this.graph[v2]) {
      return null
    }

    // Run deep first search traversal to fill this.edgeTo
    this.deepFirstSearch(v1)

    let v = v2
    const path = []

    while (v !== v1) {
      path.unshift(v)
      v = this.edgeTo[v]
    }

    path.unshift(v1)

    return path
  }
}

module.exports = AdjacencyListGraph

/**
 * USAGE
 */

// Create a graph of 10 vertices
// const graph = new AdjacencyListGraph(10)

// Add edges
// graph.addEdge(0,1)
// graph.addEdge(0,2)
// graph.addEdge(0,6)
// graph.addEdge(0,5)
// graph.addEdge(6,4)
// graph.addEdge(4,3)
// graph.addEdge(4,5)
// graph.addEdge(3,5)

// Get all connected vertices 0 vertex
// console.log(graph.findConnections(0))

// Get path of two vertices
// console.log(graph.getPath(0, 3))