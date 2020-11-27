function AcyclicLP(graph, start = 0) {
  // Collect edge reference
  const edgeTo = Array(graph.length).fill(null)

  // Collect distances
  const distTo = Array(graph.length).fill(Number.POSITIVE_INFINITY)

  // Get topological sort of vertices
  const sortedVertices = topologicalSort(graph)
  distTo[start] = 0

  // Iterate vertices and relax edges
  sortedVertices.forEach(v => {
    if (graph[v]) {
      graph[v].forEach(edge => relax(edge))
    }
  })

  console.log(edgeTo)
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

  function topologicalSort(graph) {
    let marked = Array(graph.length).map(() => false)
    const stack = []

    // Run dfs from first vertex. It fills marked array completely if all vertices are connected each other
    for (let i = 0; i < graph.length; i++) {
      if (!marked[i]) {
        dfs(i)
      }
    }

    function dfs(vertex) {
      // Mark vertex as visited
      marked[vertex] = true

      // Iterate edges of the current vertex
      for (let i = 0; graph[vertex] && i < graph[vertex].length; i++) {
        // Check if edge vertex is not visited yet
        if (!marked[graph[vertex][i].get('to')]) {
          // Re-run function for the current linked vertex
          dfs(graph[vertex][i].get('to'))
        }
      }

      stack.push(vertex)
    }

    // Return stack in reverse order
    return stack.reverse()
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
  edge.set('weight', item[1] * -1)

  if (!graph[vertices[0]]) {
    graph[vertices[0]] = []
  }

  graph[vertices[0]].push(edge)
});


// Set starting point
const start = 0

// Process a graph to get vertex references
const paths = AcyclicLP(graph, start)

// Get path from start to 6th vertex
console.log(pathGenerator(paths, start, 6))

// Get path to 7th vertex
console.log(pathGenerator(paths, start, 7))