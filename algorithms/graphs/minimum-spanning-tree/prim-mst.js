function lazyPrimMST(graph) {
  // Mark visited vertices
  const marked = []

  // Priority queue
  const PQ = []

  // Initialize MST
  const MST = []

  // Start from 0th vertex
  visit(0)

  while (PQ.length > 0 && MST.length < graph.length - 1) {
    // Get min (first) value from PQ
    const edge = PQ.shift()

    // Get vertices from edge
    const v = edge.get('v')
    const w = edge.get('w')

    // Skip the current edge if both vertices are marked
    if (marked[v] && marked[w]) {
      continue
    }

    // Add edge to MST
    MST.push(edge)

    // Visit v vertex
    if (!marked[v]) {
      visit(v)
    }

    // Visit w vertex
    if (!marked[w]) {
      visit(w)
    }
  }

  return MST


  // Helper function to view a vertex and add edges to PQ
  function visit(v) {
    marked[v] = true

    for (let i = 0; i < graph[v].length; i++) {
      const edge = graph[v][i]
      const w = [edge.get('v'), edge.get('w')].filter(item => item != v)[0]

      if (!marked[w]) {
        PQ.push(edge)
      }
    }

    PQ.sort((a,b) => a.get('weight') - b.get('weight'))
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
console.log(lazyPrimMST(graph))