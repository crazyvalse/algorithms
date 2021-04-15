class UnionFind {
  constructor(n) {
    // 连通分量的个数
    this.count = n
    this.parents = Array.from({ length: n }, (a, i) => i)
  }

  find(x) {
    if (x === this.parents[x]) {
      return x
    }
    return (this.parents[x] = this.find(this.parents[x]))
  }

  getCount() {
    return this.count
  }

  union(x, y) {
    const xRoot = this.find(x)
    const yRoot = this.find(y)
    if (xRoot === yRoot) {
      return
    }

    this.parents[xRoot] = yRoot
    this.count--
  }
}
