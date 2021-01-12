class NFA {
  constructor(regexp) {
    this.M = regexp.length
    this.re = regexp.split("")
    this.graph = this.buildEpsilonTransitionDigraph()
    this.gLength = this.graph.length
  }

  recognizes(txt) {
    // Possible state counters. It stores all possible states that NFA could be in.
    let pc = new Set()

    // Find all vertices reachable from a start (0th vertex)
    let dfs = this.directedDFS(new Set([0]))

    // Iterate the graph
    for (let v = 0; v < this.gLength; v++) {
      // Add marked vertices to the possible counter
      if (dfs[v]) {
        pc.add(v)
      }
    }

    // Main cycle. Iterates the text characters.
    for (let i = 0; i < txt.length; i++) {
      const match = new Set()

      for (let state of pc) {
        // Check if we reached accept state
        if (state == this.M) {
          continue
        }

        // If regexp char is equal to text char or regexp char is a wildcard, add next state to a match
        if (this.re[state] == txt.charAt(i) || this.re[state] == '.') {
          match.add(state + 1)
        }
      }

      // Find all vertices reachable from a given source
      dfs = this.directedDFS(match)

      // Reset possible counters
      pc = new Set()

      // Iterate the graph
      for (let v = 0; v < this.gLength; v++) {
        // Add marked vertices to the possible counter
        if (dfs[v]) {
          pc.add(v)
        }
      }
    }

    // Check if one of state is accept state
    for (let state of pc) {
      if (state == this.M) {
        return true
      }
    }

    return false
  }

  // Implement epsilon transition in a directed graph
  buildEpsilonTransitionDigraph() {
    // Build graph
    const graph = Array(this.M + 1).fill(null).map(() => new Set())

    // Stack is for parenthesis and | operations
    const ops = []

    for (let i = 0; i < this.M; i++) {
      // Left parenthesis
      let lp = i

      if (this.re[i] == '(' || this.re[i] == '|') {
        ops.push(i)
      } else if (this.re[i] == ')') {
        // Get or operation from stack
        let or = ops.pop()

        if (this.re[or] == '|') {
          lp = ops.pop()

          // Add edges
          graph[lp].add(or + 1)
          graph[or].add(i)
        } else {
          lp = or
        }
      }

      if (i < this.M - 1 && this.re[i + 1] == '*') {
        // Add edges to each vertex if regexp character is wildcard
        graph[lp].add(i + 1)
        graph[i + 1].add(lp)
      }

      // In the following operations, add an edge to the next character
      if (this.re[i] == '(' || this.re[i] == '*' || this.re[i] == ')') {
        graph[i].add(i + 1)
      }
    }

    return graph
  }

  // Traverses the graph and returns all vertices in array. Reached vertices are marked.
  directedDFS(set) {
    const marked = Array(this.gLength).map(() => false)

    // Helper recursive function to reach all vertices
    const dfsHelper = (vertex) => {
      // Mark the vertex as visited
      marked[vertex] = true

      if (this.graph[vertex].size) {
        for (let edge of this.graph[vertex]) {
          // Check if edge is not visited yet
          if (!marked[edge]) {
            // Re-run function for the current edge
            dfsHelper(edge)
          }
        }
      }
    }

    for (let vertex of set) {
      dfsHelper(vertex)
    }

    return marked
  }
}


/**
 * USAGE
 */
const nfa = new NFA("((A*B|AC)D)")
console.log(nfa.recognizes("AABD"))