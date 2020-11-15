/**
 * 207. Course Schedule [MEDIUM][Graph][Topological sort]
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.
 * Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
 * Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = [...Array(numCourses)].map(() => [])

  // Use Set instead of array to save space
  const checking = new Set()
  const checked = new Set()

  // Create a graph
  for (let [e, v] of prerequisites) {
    graph[v].push(e)
  }

  // Iterate graph
  for (let i = 0; i < numCourses; i++) {
    // Check in depth first search
    if (!dfs(i)) {
      return false
    }
  }

  // Since we are still there, cycle is not detected
  return true


  function dfs(vertex) {
    // We have already checked this vertex and its edges
    if (checked.has(vertex)) {
      return true
    }

    // We have already started checking this vertex
    // If checking vertex still comes, it means graph has a cycle
    if (checking.has(vertex)) {
      return false
    }

    // Start checking the vertex
    checking.add(vertex)

    for (let i = 0; i < graph[vertex].length; i++) {
      // If one of the edges returns false, possibly there is a cycle
      if (!dfs(graph[vertex][i])) {
        return false
      }
    }

    // Delete vertex from checking
    checking.delete(vertex)

    // Add vertex to checked
    checked.add(vertex)

    // DFS completed
    return true
  }
}

/**
 * USAGE
 */
console.log(canFinish(2, [[1,0], [0,1]]))