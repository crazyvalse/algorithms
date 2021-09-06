/*
https://www.bilibili.com/video/BV1xt4y1e7q4?p=21
quick union 需要权重，使得矮树挂到高树上
 */
class UnionFind {
  constructor(n) {
    // 连通分量的个数
    this.count = n
    this.parents = Array.from({ length: n }, (a, i) => i)
    this.rank = new Array(n).fill(0)
  }

  // quick find
  find(x) {
    if (x === this.parents[x]) {
      return x
    }
    return (this.parents[x] = this.find(this.parents[x]))
  }

  getCount() {
    return this.count
  }

  // quick union
  union(x, y) {
    const xRoot = this.find(x)
    const yRoot = this.find(y)
    if (xRoot === yRoot) {
      return
    }

    // x权重高，就把 yRoot 挂到 x上
    if (this.rank[xRoot] > this.rank[yRoot]) {
      this.parents[yRoot] = xRoot
    } else if (this.rank[xRoot] < this.rank[yRoot]) {
      this.parents[xRoot] = yRoot
    } else {
      this.parents[yRoot] = xRoot
      this.rank[xRoot] += 1
    }
  }
}
