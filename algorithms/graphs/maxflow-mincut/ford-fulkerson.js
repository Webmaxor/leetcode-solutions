class FordFulkerson {
  constructor(graph, s, t) {
    this.graph = graph
    this.marked = Array(this.graph.length).fill(null)
    this.edgeTo = Array(this.graph.length).fill(null)
    this.maxflow = 0
    this.start = s
    this.finish = t
  }

  // Calculate maxflow
  findMaxflow() {
    // Check if there is augmenting path between start and finish
    while (this.hasAugmentingPath()) {
      // Set maximum capacity
      let bottleneck = Number.POSITIVE_INFINITY

      // Get minimum capacity between the path edges
      for (let v = this.finish; v != this.start; v = this.otherVertex(this.edgeTo[v], v)) {
        bottleneck = Math.min(bottleneck, this.residualCapacityTo(this.edgeTo[v],v))
      }

      // Set minimum capacity to the path edges
      for (let v = this.finish; v != this.start; v = this.otherVertex(this.edgeTo[v], v)) {
        this.addResidualFlowTo(this.edgeTo[v], v, bottleneck)
      }

      // Calculate maxflow
      this.maxflow += bottleneck
    }

    // Return maxflow
    return this.maxflow
  }

  // Find shortest augmenting path (BFS)
  hasAugmentingPath() {
    // Empty the marked and edgeTo arrays
    this.marked = Array(this.graph.length).fill(null)
    this.edgeTo = Array(this.graph.length).fill(null)

    // Queue is used in BFS
    const queue = []

    // Add start point to queue
    queue.push(this.start)

    while (queue.length > 0) {
      // Get first value and remove it from queue
      const v = queue.shift()

      if (graph[v]) {
        graph[v].forEach(edge => {
          // Get other vertex of an edge
          const w = this.otherVertex(edge, v)

          // Check if path is found from start to w in the residual graph
          if (this.residualCapacityTo(edge, w) > 0 && !this.marked[w]) {
            // Save the last edge on path to w
            this.edgeTo[w] = edge

            // Mark w
            this.marked[w] = true

            // Add w to the queue
            queue.push(w)
          }
        })
      }
    }

    // Return if finish is reachable from start in residual graph
    return this.marked[this.finish]
  }

  // Get residual capacity of edge
  residualCapacityTo(edge, v) {
    if (edge.get('from') === v) {
      // Return backward edge
      return edge.get('flow')
    } else if (edge.get('to') === v) {
      // Return forward edge
      return edge.get('capacity') - edge.get('flow')
    } else {
      throw new Error('Invalid argument provided to residualCapacityTo()')
    }
  }

  // Add residual flow to an edge
  addResidualFlowTo(edge, v, delta) {
    if (edge.get('from') === v) {
      // Backward edge
      edge.set('flow', edge.get('flow') - delta)
    } else if (edge.get('to') === v) {
      // Forward edge
      edge.set('flow', edge.get('flow') + delta)
    } else {
      throw new Error('Invalid argument provided to addResidualFlowTo()')
    }
  }

  // Get other vertex than given one
  otherVertex(edge, v) {
    if (edge.get('from') === v) {
      return edge.get('to')
    }

    return edge.get('from')
  }
}


/**
 * USAGE
 */

// Sometimes we get edge list instead of graph
const weightedEdgeList = [
  [ [0,1], 10 ],
  [ [0,2], 5 ],
  [ [0,3], 15 ],
  [ [1,2], 4 ],
  [ [1,4], 9 ],
  [ [1,5], 15 ],
  [ [2,3], 4 ],
  [ [2,5], 8 ],
  [ [3,6], 16 ],
  [ [4,7], 10 ],
  [ [4,5], 15 ],
  [ [5,7], 10 ],
  [ [5,6], 15 ],
  [ [6,2], 6 ],
  [ [6,7], 10 ]
]

// If we have edge list, need to fill graph
const graph = []

// Assign vertices and weight to adjacent list graph
weightedEdgeList.forEach(item => {
  const vertices = item[0]
  const edge = new Map()

  // Add vertices
  edge.set('from', vertices[0])
  edge.set('to', vertices[1])

  // Add capacity
  edge.set('capacity', item[1])

  // Set flow to 0
  edge.set('flow', 0)

  if (!graph[vertices[0]]) {
    graph[vertices[0]] = []
  }

  if (!graph[vertices[1]]) {
    graph[vertices[1]] = []
  }

  // Save edges
  graph[vertices[0]].push(edge)
  graph[vertices[1]].push(edge)
})

// Calculate max flow
const obj = new FordFulkerson(graph, 0, 7)
console.log(obj.findMaxflow())