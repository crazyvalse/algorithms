function UnionFind(parents) {
  this.parents = parents
  this.counter = parents.length
}

UnionFind.prototype.find = function (x) {
  if (this.parents[x] === x) {
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
  this.parents[this.find(x)] = this.find(y)
  this.counter--
}

module.exports = UnionFind
