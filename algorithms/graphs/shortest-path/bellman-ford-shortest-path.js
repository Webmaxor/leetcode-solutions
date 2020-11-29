function BellmanFordSP(graph, start = 0) {
  // Collect edge reference
  const edgeTo = Array(graph.length).fill(null)

  // Collect distances
  const distTo = Array(graph.length).fill(Number.POSITIVE_INFINITY)

  // Set distance to a starting point
  distTo[start] = 0

  // Iterate vertices and relax edges
  for (let pass = 0; pass < graph.length; pass++) {
    for (let v = 0; v < graph.length; v++) {
      if (graph[v]) {
        graph[v].forEach(edge => relax(edge))
      }
    }
  }

  // Return references
  return edgeTo

  // Edge relaxation
  function relax(edge) {
    // Get edge vertices
    const v = edge.get('from')
    const w = edge.get('to')

    // Check if new distance is smaller than current one
    if (distTo[w] > distTo[v] + edge.get('weight')) {
      // Update the distance
      distTo[w] = distTo[v] + edge.get('weight')

      // Add reference
      edgeTo[w] = v
    }
  }
}

// Helper function to generate a path
function pathGenerator(edgeTo, start, end) {
  if (edgeTo[end] === undefined) {
    return
  }

  const vertices = []
  let current = end

  while (current) {
    vertices.unshift(current)
    current = edgeTo[current]
  }

  if (vertices.length) {
    vertices.unshift(start)
  }

  return vertices
}


/**
 * USAGE
 */

// Sometimes we get edge list instead of graph
const weightedEdgeList = [
  [ [4,7], 5 ],
  [ [7,2], 7 ],
  [ [1,3], 15 ],
  [ [0,4], 9 ],
  [ [3,6], 9 ],
  [ [2,3], 3 ],
  [ [1,7], 4 ],
  [ [1,2], 12 ],
  [ [0,7], 8 ],
  [ [2,6], 11 ],
  [ [7,5], 6 ],
  [ [4,6], 20 ],
  [ [0,1], 5 ],
  [ [5,6], 13 ],
  [ [4,5], 4 ],
  [ [5,2], 1 ]
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

  // Add weight
  edge.set('weight', item[1])

  if (!graph[vertices[0]]) {
    graph[vertices[0]] = []
  }

  graph[vertices[0]].push(edge)
});


// Set starting point
const start = 0

// Process a graph to get vertex references
const paths = BellmanFordSP(graph, start)

// Get path from start to 6th vertex
console.log(pathGenerator(paths, start, 6))

// Get path to 7th vertex
console.log(pathGenerator(paths, start, 7))