/**
 * 785. Is Graph Bipartite? [MEDIUM][DFS][Graph]
 * Given an undirected graph, return true if and only if it is bipartite.
 * Recall that a graph is bipartite if we can split its set of nodes into two independent subsets A and B, such that every edge in the graph has one node in A and another node in B.
 * The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.  Each node is an integer between 0 and graph.length - 1.  There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.
 *
 * Example
 * Input: [[1,3],[0,2],[1,3],[0,2]]
 * Output: true or false
 */

/**
 * @param {number[][]} points
 * @return {number[][]}
 */
var isBipartite = function(graph) {
  // Collect all colors. Define colors: true = red, false = blue
  let colors = []

  // Iterate vertices
  for (let i = 0; i < graph.length; i++) {
    // Set vertex to depth first search
    if (!dfs(i, true)) {
      return false
    }
  }

  // Depth first search function
  function dfs(vertex, isRed) {
    // Check if color is not set yet
    if (!colors.hasOwnProperty(vertex)) {
      // Set color
      colors[vertex] = isRed

      // Get edges of vertex
      const edges = graph[vertex]

      // Iterate edges
      for (let j = 0; j < edges.length; j++) {
        // Set edge to depth first search
        // If vertex color matches edge color, then graph is NOT bipartite.
        if (!dfs(edges[j], !isRed) || colors[vertex] === colors[edges[j]]) {
          return false
        }
      }
    }

    // Color already set. Just return true
    return true
  }

  // We could complete setting colors without any breaks. So, graph is bipartite.
  return true
}

/**
 * USAGE
 */
console.log(isGraphBipartite([[1,3],[0,2],[1,3],[0,2]]))
console.log(isGraphBipartite([[1,2,3],[0,2],[0,1,3],[0,2]]))