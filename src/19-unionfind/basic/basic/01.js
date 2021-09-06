let parent = Array.from({ length: 10 }, (item, index) => (index - 1 < 0 ? 0 : index - 1)) // [0, 0, 2, 2, 4, 4, 5, 7]

parent = parent.concat([10, 10, 11, 12])
console.info(parent)

function UnionFind(parent) {
  this.parents = parent
}

UnionFind.prototype.find = function (x) {
  if (x === this.parents[x]) {
    return x
  }
  return (this.parents[x] = this.find(this.parents[x]))
}

UnionFind.prototype.connected = function (x, y) {
  return this.find(x) === this.find(y)
}

UnionFind.prototype.union = function (x, y) {
  if (this.connected(x, y)) {
    return
  }
  // x的根节点 = y的根节点
  parent[this.find(x)] = this.find(y)
}

const uf = new UnionFind(parent)

console.info(uf.parents, uf.union(8, 12))
