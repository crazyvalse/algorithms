/*
不带权并查集

 */
function UnionFind(M) {
  this.parents = {}
  this.size = {} // 合并的时候为了平衡树的比例，尽量往大树上安装
  this.cnt = 0

  for (let i of M) {
    this.parents[i] = i
    this.cnt++
    this.size[i] = 1
  }
}

UnionFind.prototype.find = function (x) {
  if (x !== this.parents[x]) {
    this.parents[x] = this.find(this.parents[x])
    return this.parents[x]
  }
  return x
}

UnionFind.prototype.union = function (p, q) {
  if (this.connected(p, q)) {
    return
  }
  let rootP = this.find(p)
  let rootQ = this.find(q)
  if (this.size[rootP] < this.size[rootQ]) {
    this.parents[rootP] = rootQ
    this.size[rootQ] += this.size[rootP]
  } else {
    this.parents[rootQ] = rootP
    this.size[rootP] += this.size[rootQ]
  }
  this.cnt--
}

UnionFind.prototype.connected = function (p, q) {
  return this.find(p) === this.find(q)
}
