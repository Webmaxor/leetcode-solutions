function kruskalMST(graph) {
  // Collect edge list into dictionary object
  const edgeList = new Map()

  // Set vertices marked (used in DFS hasPath)
  const marked = []

  // Fill the edgeList
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      const edge = graph[i][j]
      const vertices = [edge.get('v'), edge.get('w')]

      // Sort edge vertices to use it as dictionary key
      vertices.sort((a,b) => a - b)

      // Use dictionary to skip duplicates
      edgeList.set(vertices.join('-'), edge)
    }
  }

  // Convert edgeList object to min priority queue
  const PQ = [...edgeList.values()]

  // Sort PQ by weight
  PQ.sort((a,b) => a.get('weight') - b.get('weight'))

  // Initialize
  const MST = []

  while (PQ.length > 0 && MST.length < graph.length - 1) {
    // Get min (first) value from PQ
    const edge = PQ.shift()

    const v = edge.get('v')
    const w = edge.get('w')

    // Check if two vertices are connected
    if (!hasPath(v, w)) {
      // Add edge to MST
      MST.push(edge)

      // Mark edge in a graph
      for (let graphEdge of graph[v]) {
        if (graphEdge.get('v') === w || graphEdge.get('w') === w) {
          graphEdge.set('black', true)
        }
      }
    }
  }

  return MST

  // Depth first search to find a path between two vertices
  function hasPath(v, w) {
    marked[v] = true

    for (let edge of graph[v]) {
      if (edge.get('black')) { console.log('black')
        if ([edge.get('v'), edge.get('w')].includes(w)) {
          return true
        }

        const otherEdge = edge.get('v') !== v ? edge.get('v') : edge.get('w')

        if (!marked[otherEdge]) {
          if (hasPath(v, otherEdge)) {
            return true
          }
        }
      }
    }

    return false
  }
}

/**
 * USAGE
 */


// Sometimes we get edge list instead of graph
const weightedEdgeList = [
  [ [6,0], 0.58 ],
  [ [2,3], 0.17 ],
  [ [4,7], 0.37 ],
  [ [1,5], 0.32 ],
  [ [0,2], 0.26 ],
  [ [0,7], 0.16 ],
  [ [1,3], 0.29 ],
  [ [4,5], 0.35 ],
  [ [2,7], 0.34 ],
  [ [6,2], 0.40 ],
  [ [6,4], 0.93 ],
  [ [1,7], 0.19 ],
  [ [5,7], 0.28 ],
  [ [0,4], 0.38 ],
  [ [3,6], 0.52 ],
  [ [1,2], 0.36 ],
]

// If we have edge list, need to fill graph
// The sad thing is.. if we have edge list, we'll need a graph length from the graph only
// Check Kruskal MST implementation above
const graph = []

// Assign vertices and weight to adjacent list graph
weightedEdgeList.forEach(item => {
  const vertices = item[0]
  const edge = new Map()

  // Add vertices
  edge.set('v', vertices[0])
  edge.set('w', vertices[1])

  // Add weight
  edge.set('weight', item[1])

  if (!graph[vertices[0]]) {
    graph[vertices[0]] = []
  }

  if (!graph[vertices[1]]) {
    graph[vertices[1]] = []
  }


  graph[vertices[0]].push(edge)
  graph[vertices[1]].push(edge)
});

// Show MST edges
console.log(kruskalMST(graph))