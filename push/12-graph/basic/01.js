// 定点
function Vertex(label, wasVisited) {
  this.label = label
  this.wasVisited = wasVisited
}

function Graph(v) {
  this.vertices = v
  this.edges = 0
  this.adj = []
  this.marked = Array.from({ length: this.vertices }, () => false)

  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = []
  }
  this.addEdge = addEdge
  this.showGraph = showGraph
  this.dfs = dfs
  this.bfs = bfs
}

function addEdge(v, w) {
  this.adj[v].push(w)
  this.adj[w].push(v)
  this.edges++
}

function showGraph() {
  for (var i = 0; i < this.vertices; i++) {
    for (var j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] !== undefined) {
        console.info(i + '->' + this.adj[i][j] + ' ')
      }
    }
  }
}

function dfs(v) {
  this.marked[v] = true
  if (this.adj[v] !== undefined) {
    console.info('visited vertex: ' + v)
  }
  for (let w of this.adj[v]) {
    if (!this.marked[w]) {
      this.dfs(w)
    }
  }
}

function bfs(s) {
  const queue = []
  this.marked[s] = true
  queue.push(s)
  while (queue.length > 0) {
    const v = queue.shift()
    if (this.adj[v] !== undefined) {
      console.info('visited vertex: ' + v)
    }
    for (let w of this.adj[v]) {
      if (!this.marked[w]) {
        this.marked[w] = true
        queue.push(w)
      }
    }
  }
}

const g = new Graph(5)
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
// g.addEdge(5, 3)
// g.addEdge(5, 4)
g.showGraph()

// g.dfs(0)
g.bfs(0)
