class AdjacencyListGraph {
  constructor(vCount, directed = false) {
    // Create empty vertices
    this.graph = Array(vCount).fill(null).map(() => new Set())
    this.directed = directed
  }

  // Adds edges between two vertices
  addEdge(v1, v2) {
    // We can't add edge to a missing vertice
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
}

module.exports = AdjacencyListGraph

/**
 * USAGE
 */
// const graph = new AdjacencyListGraph(10)
// graph.addEdge(4,5)
// graph.addEdge(1,5)
// graph.addEdge(9,0)
// console.log(graph.hasEdge(0,9))